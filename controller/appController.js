//aqui ponemos la funcionalidad
//para crear rutas
const datos = [  
    {  
        nombre: 'seccionUno',
        imgParrafo:'https://asincrono2-api.vercel.app/parrafos/parrafoSeccionUno.png',
        imgMovil:'https://asincrono2-api.vercel.app/fotosmovil/secionUno.png',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardUno.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoUno.png'
    }
    ,
    {   
        nombre: 'seccionDos',
        imgParrafo:'https://asincrono2-api.vercel.app/parrafos/parrafoSeccionDos.png',
        imgMovil:'https://asincrono2-api.vercel.app/fotosmovil/seccionDos.png',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardDos.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoDos.png'
    },
    {
        nombre: 'seccionTres',
        imgParrafo:'https://asincrono2-api.vercel.app/parrafos/parrafoSeccionTres.png',
        imgMovil:'https://asincrono2-api.vercel.app/fotosmovil/seccionTres.png',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardTres.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoTres.png'
    }, 
    {
        nombre: 'seccionCuatro',
        imgParrafo:'https://asincrono2-api.vercel.app/parrafos/parrafoSeccionCuatro.png',
        imgMovil:'https://asincrono2-api.vercel.app/fotosmovil/seccionCuatro.png',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardCuatro.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoCuatro.png'
    },
    {
        nombre: 'seccionCinco',
        imgParrafo:'https://asincrono2-api.vercel.app/parrafos/parrafoSeccionCinco.png',
        imgMovil:'https://asincrono2-api.vercel.app/fotosmovil/seccionCinco.png',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardCinco.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoCinco.png'
    }, 
    {   
        nombre: 'seccionSeis',
        imgCard:'https://asincrono2-api.vercel.app/fotoscard/cardSeis.png',
        imgTexto:'https://asincrono2-api.vercel.app/cardtextos/cardTextoSeis.png',
        imgFooter:'https://asincrono2-api.vercel.app/footer/footer.png'
    }
]
;

   

const appController = {

    todosLosParrafos(req,res){
        res.json(datos).status(200)
    },
    unParrafo(req,res){
        let id = req.params.id //para decir que la id son las posiciones del array
        res.json(datos[id]).status(200) //nos devuelve datos de un parrafo y estatus todo ok
    },


}


module.exports = appController;
