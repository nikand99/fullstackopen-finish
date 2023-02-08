import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsServer from './services/PersonsServer'
import './index.css'

import GetsearchCountries from './components/GetsearchCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    PersonsServer
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])
  console.log(countries);
    
  const handleSearchCountryChange = (event) => {
    console.log(event.target.value)
    setSearchCountry(event.target.value)
  }
  
  return (
    <div>
      find countries <input value={searchCountry} onChange={handleSearchCountryChange} />
      <GetsearchCountries countries={countries} searchCountry={searchCountry} setSearchCountry={setSearchCountry}/>
    </div>
  )
}

export default App
