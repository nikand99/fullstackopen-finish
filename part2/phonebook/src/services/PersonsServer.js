import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

// const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log('axios-getAll: ');
  return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  console.log('axios-create: ')
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  console.log('axios-update: ');
  // debugger
  return request.then(response => response.data)
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log('axios-deletePerson: ', id);
  return request.then(response => response.data)
}

export default { getAll, create, update, deletePerson }
