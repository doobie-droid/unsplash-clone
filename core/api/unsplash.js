export default ($unsplashAxios) => ({
  GetPhotos() {
    return $unsplashAxios.get(`/photos`);
  },
  SearchPhotos(searchParams) {
    return $unsplashAxios.get(`/search/photos?query=${searchParams}`);
  },
});
