const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));

//console.log(process.argv);
//console.log(argv);
//console.log('base: ',argv.b);



//console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 9] = arg3.split('=');
// console.log(base);




// const base = 7;