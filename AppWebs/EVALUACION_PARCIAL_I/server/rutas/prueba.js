;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

  api.put('/actulizardatos', pruebaControl.updatedatos)
  api.get('/leerdatos',pruebaControl.leerdatos)

  

module.exports = api