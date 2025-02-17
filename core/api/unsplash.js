export default ($unsplashAxios) => ({
  GetPhotos() {
    return $unsplashAxios.get(`/photos`);
  },
});
