const express = require('express');
const routes = express.Router();


routes.get('/', (req,res) => {
  return res.json({
    evento: 'Semana Omnistack 11',
    aluno: 'Douglas Baumgratz de Carvalho'
  });
});

module.exports = routes;