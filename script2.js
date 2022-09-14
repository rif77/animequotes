const boton = document.getElementById("boton");
const retroceder = document.getElementById("boton2");
const URL = 'https://animechan.vercel.app/api/random';
const contenedor = document.getElementById("cita");
let arraycitas = [];
let indice ;

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
        if (indice == undefined)  {
            indice = 0}
            else {
                indice ++
            }            
        }
        let data = arraycitas[indice]
        animequote(data)
    }
    )
    boton2.addEventListener('click', async () =>{
        indice = arraycitas.length-1;

        if (indice = arraycitas.length) {
            animequote(data)}
            
        }

        console.log(arraycitas[indice])
    })
}
)


function animequote(data) {
        arraycitas.push(contenedor.innerHTML)
    
    contenedor.innerHTML = `
    <p><b> ${data.character}</b> del anime ${data.anime} dijo: </p> 
    <p>"${data.quote}" </p>
    `
}



