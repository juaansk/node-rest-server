const { response, request } = require('express');

var cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ] 

const autosGet = (req = request, res = response) => {

    const {nombre, apellido, apiKey} = req.query;
    

    res.json({
        cars
    });
}

const autosPost = (req, res = response) => {
    const body = req.body;

    res.json({
       msg: "bad request post - controller",
       body
    });
}

const autosPut = (req, res = response) => {

    const parametros = req.params.id;

    res.json({
       msg: "bad request put - controller",
       parametros
    });
}

const autosDelete = (req, res = response) => {
    res.json({
       msg: "bad request delete - controller"
    });
}
 

module.exports = {
    autosGet,autosPost,autosPut,autosDelete
}