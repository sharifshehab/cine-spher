import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://cine-sphere-server.vercel.app',
});

const useAxios = () => {
    return axiosBase;
};

export default useAxios;