var axios = require("axios");

var appKey                 = require("../../private.keys").weatherAppKey;
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=" + appKey;


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl      = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        console.log(requestUrl);

        return axios.get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                }
                else {
                    return res.data.main.temp;
                }
            })
            .catch(function (res) {
                throw new Error(res.data.message);
            });
    }
};