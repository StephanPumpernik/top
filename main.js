var map = L.map('map').setView([37.3925, -5.9925], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([37.3925, -5.9925]).addTo(map);
marker.bindPopup("<b>Sevilla</b><br>I am a popup.").openPopup();