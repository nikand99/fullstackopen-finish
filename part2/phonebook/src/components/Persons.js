const Persons = ({persons, filter, handelDeleted}) => {
    return (
      <ul>
      {persons.map(person => 
        <div key={person.id}><Person name={person.name} number={person.number} filter={filter} id={person.id} handelDeleted={handelDeleted} > 
        </Person></div>
      )}
      </ul>
    )
  }
  
  const Person = ({name, number, filter, id, handelDeleted}) => {
    console.log('name: ', name, number, filter)
    if(name.toLocaleLowerCase().search(filter.toLocaleLowerCase()) > -1) {
      return (
        <div>{name} {number} <button onClick={() => handelDeleted(id) }>Delete</button></div>
      )
    }
  }

  export default Persons
