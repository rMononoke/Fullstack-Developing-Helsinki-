import { useState } from "react"
import CountryInfo from "./CountryInfo"

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const CountryBox = ({ countries }) => {

  const [openedId, setOpenedId] = useState(null)

  const handleToggle = (country) => {
    setOpenedId(prev => (prev === country.cca2 ? null : country.cca2))
  }

  if (countries.length > 10) {
    return (

      <div>
        Too many matches, specify another filter
      </div>

    )
  } else if (1 < countries.length < 11 && countries.length !== 1) {
    return (

      <div>
        {countries.map(country =>
          <div key={country.cca2}>
            {country.name.common}
            <Button
              onClick={() => handleToggle(country)}
              text={openedId === country.cca2 ? 'Hide' : 'Show'}
            />

            {openedId === country.cca2 && <CountryInfo country={country} />}
          </div>
        )}
      </div>

    )
  } else {
    const [country] = countries
    return (
      <CountryInfo country={country} />
    )
  }
}
  
export default CountryBox