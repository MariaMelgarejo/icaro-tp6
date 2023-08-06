const dataBase = require('./database.js')

const buscarPorId = (id) => {
    const resultado = dataBase.filter(producto => producto.id === id)
    if (resultado.length > 0) {
        return resultado
    } else {
        return 'El ID buscado no existe'
    }
}

const buscarPorPrecio = (precio) => {
    const resultado = dataBase.filter(producto => producto.precio < precio)
    if (resultado.length > 0) {
        return resultado
    } else {
        return 'No hay productos menores a ese precio'
    }
}

module.exports = { buscarPorId, buscarPorPrecio }