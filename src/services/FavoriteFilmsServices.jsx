import { axiosInstance } from "./axios/customAxiosWithHeader";

const getFavoriteList = async () => {
    const res = await axiosInstance.get('/api/favorite')
    // console.log(res);
    return res;
  };


const updateFavoriteList = async (film) => {
    const test = {
        films: [film],
    };
    console.log(test)
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "/api/favorite/add",
      headers: {},
      data: test,
    };
  
    const res = await axiosInstance.request(config);
    return res;
  };

  const deleteFavoriteFilm = async (film) => {
    const test = {
        films: [film],
    };
    console.log(test)
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "/api/favorite",
      headers: {},
      data: test,
    };
  
    const res = await axiosInstance.request(config);
    return res;
  };



export {getFavoriteList, updateFavoriteList, deleteFavoriteFilm}