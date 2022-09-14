const boton = document.getElementById("boton");
const retroceder = document.getElementById("boton2");
const URL = 'https://animechan.vercel.app/api/random';
const contenedor = document.getElementById("cita")
let citaAnterior = "";

async function getDATA() {
    let respuesta = await fetch(URL);

    if (respuesta.ok) {
        let data = await respuesta.json()
        return data
    }

}

document.addEventListener("DOMContentLoaded", async function () {
    boton.addEventListener('click', async () => {
        let data = await getDATA()
        animequote(data)
    }
    )
    boton2.addEventListener('click', async () =>{
        contenedor.innerHTML = citaAnterior
    })
}
)


function animequote(data) {
    if(contenedor.innerHTML){
        citaAnterior = contenedor.innerHTML
    }
    
    contenedor.innerHTML = `
    <p><b> ${data.character}</b> del anime ${data.anime} dijo: </p> 
    <p>"${data.quote}" </p>
    `
}



