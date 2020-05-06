// Geolocation API (from OpenDataSoft) to be used to geolocate user

// API Doc: https://public.opendatasoft.com/explore/dataset/us-zip-code-latitude-and-longitude/api/
// API key = 039c50e4a1a67eb9dadf0edfeda0e813083fd3f7d6d9f9ffce359e1a

//

// Handle user input and assign to variables below
var city = "";
var zip = "";

var cityURL = "&refine.city=";
var zipURL = "&refine.zip=";

let baseApiURL =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&rows=1&facet=state&facet=city&facet=zip&refine.city=";

var apiURL = "";

// append baseApiURL if user inputs city or zip
if (city.length > 0) {
  apiURL = baseApiURL + cityURL + city;
}
if (zip.length > 0) {
  apiURL = baseApiURL + zipURL + zip;
}

// set default baseApiURL
if ((city.length == 0) & (zip.length == 0)) {
  baseApiURL =
    "https://public.opendatasoft.com/explore/dataset/us-zip-code-latitude-and-longitude/api/?rows=1&refine.city=New+York";
}

console.log(baseApiURL);
fetch(apiURL).then((response) => console.log(response));

//   localStorage.setItem("lat", position.coords.latitude);
//   localStorage.setItem("lon", position.coords.longitude);
