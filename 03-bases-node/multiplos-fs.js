import fs from 'node:fs';

const crearArchivoMultiplos = (base = 5) => {
    return new Promise( (resolve, reject) => {
        console.clear()
        console.log('===============')
        console.log(`  Tabla del ${base}`)
        console.log('===============')
        let salida = '';
        for(let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`multiplos-${base}.txt`, salida, (err) => {
            if(err) throw err;
            resolve('Archivo creado');
        })
    })
}

export default crearArchivoMultiplos;


