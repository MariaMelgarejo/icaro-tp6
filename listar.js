const dataBase = require('./database.js')

const buscarPorCategoria = (categoria) => {
    const resultado = dataBase.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase())
    if (resultado.length > 0) {
        return resultado
    } else {
        return 'La categoria buscada no existe'
    }
}

module.exports = { buscarPorCategoria }