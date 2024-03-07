
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
let map_token=maptoken;
mapboxgl.accessToken = map_token;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: item.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});
 // Create a default Marker and add it to the map.
 const marker1 = new mapboxgl.Marker({color:"red"})
 .setLngLat(item.geometry.coordinates)
 .setPopup(new mapboxgl.Popup({offset: 25, className: 'my-class'})
 .setHTML(`<h4>${item.title}</h4><h1>After booking location will be shared</h1>`))
 .addTo(map);
