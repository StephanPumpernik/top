
/* 
var map = L.map('map').setView([37.3925, -5.9925], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([37.3925, -5.9925]).addTo(map);
marker.bindPopup("<b>Sevilla</b><br>I am a popup.").openPopup();
*/

// skript für top reise 

let stop = {

    nr: 24,
    title: "Sevilla",
    user: "StephanPumpernik",
    lat: 37.3925,
    lng: -5.9925,
    zoom: 13,
};



for (let i = 0; i < STOPS.length; i++) {
    console.log(STOPS[i],);
}

// Karte initialisieren
let map = L.map('map')

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//loop über Etappen
for (let i = 0; i < STOPS.length; i++) {

    //marker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    //popup definieren 
    marker.bindPopup(`
           <h2>${STOPS[i].title}</h2>
           <ul>
            <li> Geogr. Breite: ${STOPS[i].lat.toFixed(5)}° </>
            <li> Geogr. Länge: ${STOPS[i].lng.toFixed(5)}° </>
           </ul>
            `);

    //auf eigene Etappe blicken und popup öffnen
    if (STOPS[i].user == "StephanPumpernik") {
        console.log(STOPS[i].user, "meineEtappe")
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom)
        marker.openPopup();
    }
    //Pulldownmenü befüllen
    let option = document.createElement("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title;
    if (STOPS[i].user == "StephanPumpernik") {
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option);
}

// auf Änderungen beim Pulldown reagieren

document.querySelector("#pulldown select").onchange = function(evt) {
let url =`https://${evt.target.value}.github.io/nz`;
window.location = url;
//console.log(evt.target.value)
}
