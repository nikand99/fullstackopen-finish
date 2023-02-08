
const GetsearchCountries = ({countries, searchCountry, setSearchCountry}) => {
    const getsearchCountriest = countries.filter(county => {
      if(county.name.common.toLocaleLowerCase().search(searchCountry.toLocaleLowerCase()) > -1 ) return county
    } )
  
    console.log(getsearchCountriest)
    if(getsearchCountriest.length > 10) {
      return(
        <div>To many matches, specify another filter</div>
      )
    }
    else if(getsearchCountriest.length === 1) {
      return(
        getsearchCountriest.map(country => 
          <Country country={country}/>
        ) 
      ) 
    }
    else {
      return(
        getsearchCountriest.map(country => 
          <div key={country.name.common}>{country.name.common} <button onClick={ () => goToCountry(country, setSearchCountry)}>show</button></div>
        ) 
      ) 
    }
  }

  function goToCountry(country, setSearchCountry) {
    console.log("goToCountry", country.name.common)
    setSearchCountry(country.name.common) 
  }

  const Country = ({country}) => {
    console.log("Country", country)
    return(
      <div key={country.name.common}>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p>languages: </p>
        <ul>
          {Object.values(country.languages).map((value) => (
            <li>{value}</li>
          ))}
        </ul>
        {console.log("country.languages: ", country.languages)}
        <img src={country.flags.png}  />
      </div>
    )
  }

  export default GetsearchCountries
