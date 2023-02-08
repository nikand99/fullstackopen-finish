const PersonForm =({addPerson, newName, handleNewNameChange, newNumber, handleNewNumberChange}) => {
    return (
      <form onSubmit={addPerson}>
          <div>
            name: <input
              value={newName}
              onChange={handleNewNameChange}
            /><br/>
            phone: <input
              value={newNumber}
              onChange={handleNewNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
          <div>debug name: {newName}</div>
          <div>debug phone: {newNumber}</div>
        </form>
    )
  }

  export default PersonForm
