;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let leerdatos = (req, res) => {
    let tabla = req.query.tabla
    let datos = req.query.datos
    db.select(datos).from(tabla)
        .then(resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado,
                mensaje: `Resultados Encontrados`
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error al Obtener Datos`
            })
        })
}


let updatedatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    db(tabla).where("id", datos.id).update(datos)
        .then(resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado,
                mensaje: `Se actualizo correctamente el registro`
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: datos,
                mensaje: `Error del servidor: ${error}`
            })
        })
}


module.exports = {
    updatedatos,
    leerdatos
}
