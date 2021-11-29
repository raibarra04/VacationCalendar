"use strict";

const controller = require("../controllers/controller");

module.exports = (app) => {
  //   NEEDS CHANGING
  //   app.route("/about").get(controller.about);
  app.route("/weather/:q").get(controller.getWeather);
};
