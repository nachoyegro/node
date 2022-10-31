import crearArchivoMultiplos from './multiplos-fs.js'

crearArchivoMultiplos(2)
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err)) ;