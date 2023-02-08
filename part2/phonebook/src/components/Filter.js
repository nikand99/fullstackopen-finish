const Filter = ({filter, handlefilterChange}) => {
    return (
      <div>
      filter shown with: <input
      value={filter}
      onChange={handlefilterChange}
      />
      </div>
    )
  }

  export default Filter
