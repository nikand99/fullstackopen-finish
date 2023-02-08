import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text} </td><td>{value}</td></tr>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    console.log("all: ", all);
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} /> 
            <StatisticLine text="neutral" value ={neutral} /> 
            <StatisticLine text="bad" value ={bad} /> 
            <tr><td>all </td><td> {all}</td></tr>
            <tr><td>average </td><td> {(good - bad) / (all)}</td></tr>
            <tr><td>positive </td><td> {((good) / (all)) * 100} % </td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      
       <button onClick={() => setGood(good + 1)}>
       good
       </button>
       <button onClick={() => setNeutral(neutral + 1)}>
       neutral
       </button>
       <button onClick={() => setBad(bad + 1)}>
       bad
       </button>
       <h1>statistics</h1>
       <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
