// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
        "Street": streets,
        "Satellite": satelliteStreets
      };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
        center: [39.5, -98.5],
        zoom: 3,
        layers: [streets]
    });

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Earthquake GeoJSON data
quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Earthquake markers
d3.json(quakes).then(function(data){
        L.geoJSON(data, {
                // specified each marker's type & location
                pointToLayer: function(feature, latlng) {
                console.log(data);        
                return L.circleMarker(latlng);
                },
                // set marker style
                style: styleInfo,
                // add popup to each marker
                onEachFeature: function(feature, layer) {
                        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
                },        
        }).addTo(map);  
});

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
        return {
          opacity: 1,
          fillOpacity: 1,
          fillColor: getColor(feature.properties.mag),
          color: "#000000",
          radius: getRadius(feature.properties.mag),
          stroke: true,
          weight: 0.5
        };
      }

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
        if (magnitude === 0) {
          return 1;
        }
        return magnitude * 4;
      }

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
        if (magnitude > 5) {
          return "#ea2c2c";
        }
        if (magnitude > 4) {
          return "#ea822c";
        }
        if (magnitude > 3) {
          return "#ee9c00";
        }
        if (magnitude > 2) {
          return "#eecc00";
        }
        if (magnitude > 1) {
          return "#d4ee00";
        }
        return "#98ee00";
      }


      // {
//         L.geoJson(data,{
//                 pointToLayer: function(feature, latlng) {
//                         console.log(data);
//                         return L.circleMarket(latlng);
//                 },
//         }).addTo(map);
// });





// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/yingko123/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Grabbing our GeoJSON data
// d3.json(torontoHoods).then(function(data){
//         console.log(data);
//         // Creating a GeoJSON layer with the retrieved data
//         L.geoJson(data,{
//                 color:"blue",
//                 weight: 1,
//                 fillColor: "yellow",
//                 fillOpacity: "0.1",
//         }).addTo(map);
// });


// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/yingko123/Mapping_Earthquakes/main/torontoRoutes.json";

// // Create a style for the lines.
// let myStyle = {
//         color: "#ffffa1",
//         weight: 2
//     };

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data1) {
//         console.log(data1);
//       // Creating a GeoJSON layer with the retrieved data.
//       L.geoJSON(data1,{
//         style: myStyle,
//         // color: "#ffffa1",
//         // weight: 2,
//         onEachFeature: function(feature, layer){
//                 layer.bindPopup("<h3> Airline: " + feature.properties.airline +
//                 "</h3> <hr><h3> Destination: " + feature.properties.dst + "</h3>");
//         }
//       }).addTo(map);
//     });

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/yingko123/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data
// d3.json(airportData).then(function(data){
//         console.log(data);
//         // Creating a GeoJSON layer with the retrieved data
//         L.geoJson(data).addTo(map);
// });



// Then we add above tile layer to the map.
//streets.addTo(map);



// // Add a marker to the map for London
// let marker = L.marker([51.5, -0.09]).addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let marker2 = L.marker([34.0522, -118.2437]).addTo(map);

// //circle marker
// let marker3 = L.circle([34.0522, -118.2437], {
//         radius: 100000,
//         color: "black",
//         fillColor: '#ffffa1'
// }).addTo(map);



// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//         console.log(city);
//         L.marker(city.location).bindPopup(
//            "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
//            + city.population.toLocaleString()+"</h3>"
//         ).addTo(map);
//        });      

// // use circle marker instead

// cityData.forEach(function(city) {
//         console.log(city);
//         L.circleMarker(city.location, {
//                 radius: city.population/100000
//         }).bindPopup(
//            "<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population "
//            + city.population.toLocaleString()+"</h3>"
//         ).addTo(map);
//        });      

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};       

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,{

//    // turn each feature into a marker on the map
//    pointToLayer: function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2>");
//    }  
// }).addTo(map);
     

// // Coordinates for each point to be used in the line.
// let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790],
//    [40.7899, -111.9791],
//    [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//         color: "yellow"
//       }).addTo(map);
