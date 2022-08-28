// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
<<<<<<< HEAD
let map = L.map('mapid').setView([37.5, -122.5], 10);
=======
let map = L.map('mapid').setView([40.7899, -111.9791], 6);
>>>>>>> Mapping_GeoJSON_Points


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
<<<<<<< HEAD
        id: 'mapbox/streets-v11',
=======
        id: 'mapbox/satellite-streets-v11',
>>>>>>> Mapping_GeoJSON_Points
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
<<<<<<< HEAD
     }).addTo(map);
=======
}).addTo(map);
>>>>>>> Mapping_GeoJSON_Points


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
        console.log(city);
        L.marker(city.location).bindPopup(
           "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
           + city.population.toLocaleString()+"</h3>"
        ).addTo(map);
<<<<<<< HEAD
       });      
=======
});      
>>>>>>> Mapping_GeoJSON_Points

// use circle marker instead

cityData.forEach(function(city) {
        console.log(city);
        L.circleMarker(city.location, {
                radius: city.population/100000
        }).bindPopup(
           "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
           + city.population.toLocaleString()+"</h3>"
        ).addTo(map);
<<<<<<< HEAD
       });      

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};       

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport,{

   // turn each feature into a marker on the map
   pointToLayer: function(feature, latlng){
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2>");
   }  
}).addTo(map);
=======
});      

// Coordinates for each point to be used in the line.
let line = [
   [33.9416, -118.4085],
   [37.6213, -122.3790],
   [40.7899, -111.9791],
   [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
        color: "yellow"
      }).addTo(map);
>>>>>>> Mapping_GeoJSON_Points
