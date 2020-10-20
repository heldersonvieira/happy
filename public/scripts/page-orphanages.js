// create map
const map = L.map('mapid').setView([-3.7086175,-38.5745938], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSide: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"</a>')

L.marker([-3.7086175,-38.5745938], {icon: icon}).addTo(map)
    .bindPopup(popup);