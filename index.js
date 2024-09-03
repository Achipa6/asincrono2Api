const express = require('express'); // paquete para hacer servidor
const app = express(); //para hacer la ruta
const bunyan = require('bunyan'); // para hacer consolelog más completos(hora, fecha y muchos más detalles)
const logger = bunyan.createLogger({name:'Servidor'});
const appRouter = require('./routes/appRouter');

const PORT = process.env.PORT || 3000

const cors= require('cors') //para requerir cors porque no nos deja llamar en el mismo servidor(no permite origen cruzado) con esto evitamos ese error
app.use(cors()); //para decir que app use cors

// const PORT = process.env.PORT || 3000 //para decirle que use los datos del archivo env y si no esta descrito o no existe esta variable que use 3000

app.use(express.static(__dirname+'/public'))//para que podamos usar los archivos estaticos dirname le dice que busque en directorio carpeta public
                                            //así podemos poner localhost300/nombredelarchivo.png y vemos en la app la foto
app.use('/productos', appRouter) //para usar ruta app



// Gestion de errores
app.get('/' , (req , res , next) =>{
    try {

        res.status(200).send('Haciendo GET en /')
        
    } catch (error) {
        
        next(error)

    }
})
app.use((err , req , res , next)=>{
    res.status(500).json('Error en la API')
})

// Middleway para manejar 404                                                  
app.use((req,res)=>{   

    res.status(404).send('<h1>Ruta no encontrada (not found)</h1>')
})                          
// Middleway para manejar 500 
app.use((err,req,res)=>{
    logger.error(err)
    res.status(500).send('<h1> Error en el servidor: '+err+' </h1>')
})






//para levantar el servidor:
app.listen(PORT,()=>{
    logger.info('Servidor encendido')
})