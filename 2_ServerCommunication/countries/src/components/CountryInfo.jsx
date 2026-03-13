import { useState, useEffect } from "react"
import getWeather from '../services/WeatherApi'

const CountryInfo = ({ country }) => {

  const [currentWeather, setWeather] = useState(null)

  useEffect(() => {
    getWeather(country)
      .then(responsedData => {
        setWeather(responsedData)
      })
  }, [country])

  const celsius = (parseFloat(currentWeather?.main?.temp) - 273.15).toFixed(2)
  const wind = (currentWeather?.wind?.speed)


  return (
    <div>
        <h1>{country.name.common}</h1>

        Capital {country.capital}<br />
        Area {country.area}

        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>

        <img src={country.flags.png} />
        <p>Temperature {celsius} Celsius</p>

        <img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} />
        <p>Wind {wind} m/s</p>
      </div>
  )
}

export default CountryInfo