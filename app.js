const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;


    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo ${archivo} creado`)).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log('comando no reconocido');

}
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);
// crearArchivo(base).then(archivo => console.log(`Archivo ${archivo} creado`)).catch(err => {
//     console.log(err);
// });