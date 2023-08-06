const dataBase = require('./database.js')

const agregar = (producto) => {
    const resultado = dataBase.filter(item => item.id === producto.id)
    if (resultado.length == 0) {
        dataBase.push(producto)
        return dataBase
    } else {
        return 'El ID ya existe'
    }
}

module.exports = { agregar }
