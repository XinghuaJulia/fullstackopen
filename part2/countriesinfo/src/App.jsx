import { useState, useEffect } from 'react'

import axios from 'axios'

const CountryInfo = ({ country }) => {
  console.log('language spoken', country.languages)
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area} km2</p>

      <h1>Languages</h1>
      <ul>
        {Object.values(country.languages).map(language => <li>{language}</li>)}
      </ul>

      <img src={country.flags.svg}></img>
    </div>
  )
}

const FilterCountries = (props) => {

  if (props.filtered.length == 1) {
    return (
      <div>
        <CountryInfo country={props.filtered[0]} />
      </div>
    )
  } else if (props.filtered.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else {
      return ( 
        <div>
            {
              props.filtered.map(country => <li key={country.name.common}>{country.name.common} <button onClick={() => props.onShow(country.name.common)}>show</button></li>)
            }
        </div>
)
  }
}

function App() {
  const [value, setValue] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    console.log('effect run, country is now')

    console.log('fetching countries info...')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log(response.data)
        setAllCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const filtered = allCountries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      <form>
        find countries <input value={value} onChange={handleChange} />
      </form>

      <FilterCountries filtered={filtered} onShow={setValue} />
    </div>
  )
}

export default App
