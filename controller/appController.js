//aqui ponemos la funcionalidad
//para crear rutas
const datos = [  
    {  
        nombre: 'seccionUno',
        imgParrafo:'http://localhost:3000/parrafos/parrafoSeccionUno.png',
        imgMovil:'http://localhost:3000/fotosmovil/secionUno.png',
        imgCard:'http://localhost:3000/fotoscard/cardUno.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoUno.png'
    }
    ,
    {   
        nombre: 'seccionDos',
        imgParrafo:'http://localhost:3000/parrafos/parrafoSeccionDos.png',
        imgMovil:'http://localhost:3000/fotosmovil/seccionDos.png',
        imgCard:'http://localhost:3000/fotoscard/cardDos.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoDos.png'
    },
    {
        nombre: 'seccionTres',
        imgParrafo:'http://localhost:3000/parrafos/parrafoSeccionTres.png',
        imgMovil:'http://localhost:3000/fotosmovil/seccionTres.png',
        imgCard:'http://localhost:3000/fotoscard/cardTres.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoTres.png'
    }, 
    {
        nombre: 'seccionCuatro',
        imgParrafo:'http://localhost:3000/parrafos/parrafoSeccionCuatro.png',
        imgMovil:'http://localhost:3000/fotosmovil/seccionCuatro.png',
        imgCard:'http://localhost:3000/fotoscard/cardCuatro.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoCuatro.png'
    },
    {
        nombre: 'seccionCinco',
        imgParrafo:'http://localhost:3000/parrafos/parrafoSeccionCinco.png',
        imgMovil:'http://localhost:3000/fotosmovil/seccionCinco.png',
        imgCard:'http://localhost:3000/fotoscard/cardCinco.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoCinco.png'
    }, 
    {   
        nombre: 'seccionSeis',
        imgCard:'http://localhost:3000/fotoscard/cardSeis.png',
        imgTexto:'http://localhost:3000/cardtextos/cardTextoSeis.png',
        imgFooter:'http://localhost:3000/footer/footer.png'
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