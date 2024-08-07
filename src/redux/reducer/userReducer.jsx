
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../services/UserServices";

import toast from "react-hot-toast";

const INITIAL_STATE = {
  account: { email: "", auth: false, token: "" },
  isLoading: false,
  isError: false,
};

export const fetchUser = createAsyncThunk(
  "fetchUser",
  async ({email, password}, thunkApi) => {
    const  data  = await loginApi(email, password);
    console.log(data);
    if (data) {
      localStorage.setItem("AccessToken", data.data.tokens.accessToken);
      localStorage.setItem("RefreshToken", data.data.tokens.refreshToken);
    }

    return { data, infomation: {email}};
  }
);

export const userReducer = createSlice({
  name: "user",
  initialState: {...INITIAL_STATE, account: {
    email: "",
    auth: localStorage.getItem("RefreshToken") !== null, // Check for RefreshToken
    token: localStorage.getItem("RefreshToken"),
  },},
  reducers: {
    handleLogout: (state, action) => {
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("RefreshToken");

      state.account.email = "";
      state.account.token = "";
      state.account.auth = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action.payload.data.data.tokens.refreshToken)
        state.account.token = action.payload.data.data.tokens.refreshToken;
        state.account.email = action.payload.infomation.email;

        state.account.auth = true;
        state.isLoading = false;
        state.isError = false;

        toast.success("Login success");

      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.account.auth = false;
        state.isLoading = false;
        state.isError = true;

        toast.error("Wrong email or password");

      });
  },
});

export const { handleLogout } = userReducer.actions;

export default userReducer.reducer;



// export const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'FETCH_USER_LOGIN':
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false
//             }
//         case 'FETCH_USER_ERROR':
//             return {
//                 ...state,
//                 account: {
//                     auth: false,
//                 },
//                 isLoading: false,
//                 isError: true
//             }
//         case 'FETCH_USER_SUCCESS':
//             return {
//                 ...state,
//                 account: {
//                     auth: true,
//                 },
//                 isLoading: false,
//                 isError: false
//             }
//         case 'USER_LOGOUT':
//             localStorage.removeItem('email');
//             localStorage.removeItem('token');
//             return{
//                 ...state,
//                 account: {
//                     email:'',
//                     token:'',
//                     auth: false
//                 }
//             }
//         default:
//             return state;
            

//     }
// }