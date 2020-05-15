const fetch = require("node-fetch");

const weather = async (message, key, args) => {
  if (!args.length) {
    return message.author.send(
      "Enter a location with '!weather wolverhampton'"
    );
  } else {
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${args}&appid=${key}`;
    const response = await fetch(api_url);
    const json = await response.json();

    if (json.cod === "404") {
      return message.channel.send(`${args[0]} not found.`);
    }

    const desc = json.weather[0].description;

    let weatherDesc = desc.toUpperCase();
    switch (desc) {
      case "broken clouds":
        weatherDesc = "mostly cloudy";
      case "overcast clouds":
        weatherDesc = "completely fucking cloudy";
      default:
        break;
    }

    return message.channel.send(
      `In ${
        args[0].charAt(0).toUpperCase() + args[0].slice(1)
      } it is ${convertToCelsius(json.main.temp)}°C and ${weatherDesc}.
It feels like ${convertToCelsius(json.main.feels_like)}°C.
The wind speed is ${(json.wind.speed * 2.237).toFixed(1)}mph.
The cloudyness is ${json.clouds.all}%`
    );
  }
};

const convertToCelsius = (temp) => {
  return (temp - 273.15).toFixed(1);
};

module.exports = { weather };