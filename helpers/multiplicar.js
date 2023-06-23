const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = "";
        let consola = "";
        for(let i = 1; i<=hasta;i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}
// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
// let salida = "";
// for(let i = 1; i<=10;i++){
//     salida += `${base} x ${i} = ${base * i}\n`;
// }

// fs.writeFileSync(`tabla-${base}.txt`, salida);
// resolve(`tabla-${base}.txt`);
// })}


module.exports = {
    crearArchivo
}