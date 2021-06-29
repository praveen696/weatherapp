import axios from "axios";
const apiKey = '72acb130cf1c8d15b1e34e4aebb117d0';

export default () => ({

    async getWeather(latitude, longitude) {
        let weather = '';
        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&units=metric&appid=${apiKey}`)
        .then(function (response) {
            console.log(response.data);
            weather =  response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        return weather;
    },

});