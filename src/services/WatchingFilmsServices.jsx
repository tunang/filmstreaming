import { axiosInstance } from "./axios/customAxiosWithHeader";

const getWatchingList = async () => {
    const res = await axiosInstance.get('/api/watching')
    // console.log(res);
    return res;
  };


const updateWatchingList = async (film) => {
    const test = {
        films: [film],
    };
    console.log(test)
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "/api/watching/add",
      headers: {},
      data: test,
    };
  
    const res = await axiosInstance.request(config);
    return res;
  };

  const deleteWatchingFilm = async (film) => {
    const test = {
        films: [film],
    };
    console.log(test)
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "/api/watching",
      headers: {},
      data: test,
    };
  
    const res = await axiosInstance.request(config);
    return res;
  };



export { getWatchingList, updateWatchingList, deleteWatchingFilm}