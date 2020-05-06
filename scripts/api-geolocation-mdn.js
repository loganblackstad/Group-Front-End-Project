// Geolocation API (from MDN) to geolocate user

// API Doc: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// no auth needed

//

navigator.geolocation.getCurrentPosition((position) => {
  localStorage.setItem("lat", position.coords.latitude);
  localStorage.setItem("lon", position.coords.longitude);
});
