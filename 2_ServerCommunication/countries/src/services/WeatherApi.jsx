import axios from "axios"

const getWeather = (country) => {
    const lat = country.latlng[0]
    const lon = country.latlng[1]
    const apiKey = 'YOUR API KEY'
    const wheatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const request = axios.get(wheatherApi)
    return request.then(response => response.data)
}

export default getWeather