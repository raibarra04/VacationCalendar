const request = require("request");

const apiKey =
  process.env.WEATHER_API_KEY || "37750c05280a4ec473decaa54ee64059"; // change

const weatherCodeURL = "https://api.openweathermap.org/data/2.5/weather?q="; // change

var weather = {
  find: (req, res, next) => {
    request(
      // change request url params
      weatherCodeURL + req.params.q + "&appid=" + apiKey,
      //   weatherCodeURL + "Corvallis&appid=" + apiKey,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          console.log(response.statusCode + response.body);
          res.send({
            weather: -1,
          });
        }
      }
    );
  },
};

module.exports = weather;
