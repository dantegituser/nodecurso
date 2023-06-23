const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplcar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla en consola'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default:10,
    describe: 'limite para la tabla'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser numerica';
    }
    return true;
})
.argv;

module.exports = argv;