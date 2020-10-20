const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-3.7086175,-38.5745938], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSide: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-3.7086175,-38.5745938], {icon: icon}).addTo(map);


    // image gallery

function selectImage(event) {
    const button = event.currentTarget;
    
    // remover todas as classes .active
    const buttons = document.querySelectorAll('.images button')

    buttons.forEach(button => {
        button.classList.remove('active');
    })

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    // atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionara classe .active para este botão
    button.classList.add('active');
}