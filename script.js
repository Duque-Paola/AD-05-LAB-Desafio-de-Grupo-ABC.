const titulosH5 = document.querySelectorAll('h5');

function cambiarColorAleatorio(event) {

    const colores = ['green', 'blue', 'red'];

    const indiceRandom = Math.floor(Math.random() * colores.length);

    event.target.style.color = colores[indiceRandom];

}

titulosH5.forEach(h5 =>{
    h5.addEventListener('click', cambiarColorAleatorio);
})