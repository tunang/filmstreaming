import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

// import store from "../../redux/store";

import { handleLogout } from "../../redux/reducer/userReducer";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// let authTokens = localStorage?.getItem("AccessToken");
// let refreshToken = localStorage?.getItem("RefreshToken");

const axiosInstance = axios.create({
  baseURL: "https://filmstreaming-server.onrender.com",
  // headers: {Authorization: `Bearer ${authTokens}`},
  timeout: 60000,
});

let hasRetried = false;

const setupAxiosInterceptors = () => {
  const dispatch = useDispatch();

  axiosInstance.interceptors.request.use(
    async (req) => {
      console.log("Request interceptors ran");
      console.log(req);
      const AccessToken = localStorage.getItem("AccessToken");
      if (AccessToken) {
        req.headers.Authorization = `Bearer ${AccessToken}`;
      }
      console.log(req);
      return req;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (respond) => {
      console.log("Respond success");
      return respond;
    },
    async (err) => {
      console.log("Fail Respond interceptors ran");
      const { config, response } = err;
      const originalRequest = config;

      const RefreshToken = localStorage.getItem("RefreshToken");
      if (!RefreshToken) {
        // No refresh token, handle logout permanently
        console.log("check");
        toast.error("Your login session timed out");
        // dispatch(handleLogout());
        return Promise.reject(err); // Don't retry without a refresh token
      }

      const RefreshTokenExpire = jwtDecode(RefreshToken);
      const isRefreshTokenExpired =
        dayjs.unix(RefreshTokenExpire.exp).diff(dayjs()) < 1;
      console.table("isRefreshTokenExpired", isRefreshTokenExpired);
      // **Improved retry logic:** Use a dedicated retry flag for clarity
      // let hasRetried = false;
      if (isRefreshTokenExpired) {
        // Refresh token expired, handle permanent logout
        toast.error("Your login session timed out");
        dispatch(handleLogout());
        return Promise.reject(err); // Don't retry with an expired refresh token
      }

      const status = err.status || response?.status; // Handle potential undefined response object

      if (status === 500) {
        // Handle server errors (logout, reset cart, etc.)
        toast.error("Your login session timed out");
        dispatch(handleLogout());
        dispatch(resetCart());
      } else if (status === 403) {
        // Handle authentication errors with token refresh
        console.log(
          response.data.message === "Cant find" ? "check" : "uncheck"
        );
        if (response.data.message === "Cant find") {
          console.log(response.data.message);
          toast.error("Your login session timed out");
          dispatch(handleLogout());
          
          return Promise.reject(err);
        }

        if (!hasRetried) {
          hasRetried = true; // Mark the request as retried

          console.log("Old RefreshToken: ", RefreshToken);
          const newResponse = await axios.post(
            "https://filmstreaming-server.onrender.com/api/auth/token",
            { refreshToken: RefreshToken }
          );

          localStorage.setItem(
            "AccessToken",
            newResponse.data.tokens.accessToken
          );
          localStorage.setItem(
            "RefreshToken",
            newResponse.data.tokens.refreshToken
          );

          const updatedRequest = {
            ...originalRequest,
            headers: {
              ...originalRequest.headers,
              Authorization: `Bearer ${newResponse.data.tokens.accessToken}`,
            },
          };
          hasRetried = false;
          console.log(updatedRequest);
          const res = await axios(updatedRequest);
          console.log(res);
          return res; // Return the response from the retried request
        }
      }

      console.log(originalRequest.headers.Authorization);
      return Promise.reject(err);
    }
  );
};

export { axiosInstance, setupAxiosInterceptors };
