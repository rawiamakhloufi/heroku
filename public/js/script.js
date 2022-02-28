// the map
var map = L.map("map").setView([30.4937, -6.283], 6);
 var Styly = {
            "color": "Grey",
            "opacity": 1,
            "weight": 1,
            "fillColor": "White"
        };

        function highlightFeature(e) {
        var layer = e.target;

            layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
            }

        }

        function resetHighlight(e) {
            region.resetStyle(e.target);

        }
        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature,
    
        });


        }

        var region = L.geoJson(region,{
            style: Styly,
            onEachFeature: onEachFeature
        }).addTo(map);

// Google Earth Hybrid basemap
// L.tileLayer("http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// OpenStreetMap basemap
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// add Positron basemap
const urlPositron = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
function addBM() {
  L.tileLayer(urlPositron, {
    attribution:
      'Powered by <a class="attribution" href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a class="attribution" href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a class="attribution" href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
    maxZoom: 20,
    id: "osm-bright",
  }).addTo(map);
  map.setView([30.4937, -6.283], 6);
}

// first init
addBM();
