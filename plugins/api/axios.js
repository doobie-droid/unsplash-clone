import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const applyAxiosInterceptors = (axios) => {
    axios.interceptors.response.use(
      (response) => {
        const {
          data: { message },
        } = response;
        return response.data;
      },
      (error) => {
        const { response } = error;

        if (response?.data?.message) {
          alert(response.data.message);
        }
        throw error;
      }
    );
    axios.interceptors.request.use((req) => {
      return req;
    });
  };

  const axiosInstance = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
  });

  const axiosUnsplashInstance = axios.create({
    baseURL: config.public.unsplashApiBase,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${config.public.unsplashAccessKey}`,
    },
  });

  applyAxiosInterceptors(axiosInstance);
  applyAxiosInterceptors(axiosUnsplashInstance);

  nuxtApp.provide("axios", axiosInstance);
  nuxtApp.provide("axiosUnsplash", axiosUnsplashInstance);
});
