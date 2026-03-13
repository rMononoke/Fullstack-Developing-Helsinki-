import { useState, useEffect } from 'react'
import CountryFilter from './components/CountryFilter'
import countryServices from './services/FunctionsApi'
import CountryBox from './components/CountryBox'

const App = () => {

  const [filterValue, setFilterValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryServices
    .getAll()
    .then(responsedData => {
      setCountries(responsedData)
    })
  }, [])

  const changeCountriesList = (event) => {
    setFilterValue(event.target.value)
  }

  const countriesToShow =
    filterValue.trim() === ''
      ? countries
      : countries.filter(country =>
        country.name.common.toLowerCase().includes(filterValue.trim().toLowerCase())
      )

  return (
    <div>

      <CountryFilter filterValue={filterValue} changeFilterValue={changeCountriesList} />

      <CountryBox countries={countriesToShow} />

    </div>
  )
}

export default App