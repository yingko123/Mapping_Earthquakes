// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 3);


// Syntax to set up multiple tile layers of map object
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
});
// Then we add above tile layer to the map.
streets.addTo(map);

// Add a marker to the map for London
let marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
let marker2 = L.marker([34.0522, -118.2437]).addTo(map);

//circle marker
let marker3 = L.circle([34.0522, -118.2437], {
        radius: 100000,
        color: "black",
        fillColor: '#ffffa1'
     }).addTo(map);


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
        console.log(city);
        L.marker(city.location).bindPopup(
           "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
           + city.population.toLocaleString()+"</h3>"
        ).addTo(map);
       });      

// use circle marker instead

cityData.forEach(function(city) {
        console.log(city);
        L.circleMarker(city.location, {
                radius: city.population/100000
        }).bindPopup(
           "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
           + city.population.toLocaleString()+"</h3>"
        ).addTo(map);
       });      