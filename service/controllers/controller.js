"use strict";

// const properties = require("../package.json");
const weather = require("../service/weather");

var controllers = {
  //   about: (req, res) => {
  //     var aboutInfo = {
  //       name: properties.name,
  //       version: properties.version,
  //     };
  //     res.json(aboutInfo);
  //   },

  getWeather: (req, res) => {
    weather.find(req, res, (err, weath) => {
      if (err) res.send(err);
      res.json(weath);
    });
  },
};

module.exports = controllers;
