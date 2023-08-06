const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const { buscarPorId, buscarPorPrecio } = require('./busqueda')
const { buscarPorCategoria } = require('./listar')
const { agregar } = require('./agregar')

const searchParam = argv._[1]

switch (argv._[0]) {
    case 'buscarPorId':
        // node index.js buscarPorId 12
        console.log(buscarPorId(searchParam))
        break;
    case 'buscarPorCategoria':
        // node index.js buscarPorCategoria lacteos
        console.log(buscarPorCategoria(searchParam))
        break;
    case 'buscarPorPrecio':
        // node index.js buscarPorPrecio 400
        console.log(buscarPorPrecio(searchParam))
        break;
    case 'agregar':
        // node index.js agregar --id=2 --nombre=Fulbito --categoria=golosinas --descripcion="El mejor alfajor" --precio=50
        const producto = {
            id: argv.id ?? '',
            nombre: argv.nombre ?? '',
            descripcion: argv.descripcion ?? '',
            categoria: argv.categoria ?? '',
            precio: argv.precio ?? '',
        }
        console.log(agregar(producto));
        break;

    default:
        console.log('Esta función no está soportada');
        break;
}