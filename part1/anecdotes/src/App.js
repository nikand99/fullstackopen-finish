import { useState } from 'react'

function getRandomInt(max) {
  const randomnumber = Math.floor(Math.random() * max);
  console.log("randomnumber: ", randomnumber);

  return randomnumber
}

function handleVoteClick(vote, selected) {
  const copy = { ...vote }
  copy[selected] += 1 
  console.log(copy)
  
  return copy
}

const MostVotes = ({vote, anecdotes}) => {
  let max = 0
  let selected = 0
  const voteLength = Object.keys(vote).length

  for(let i = 0; i < voteLength; i++){
    if(vote[i] > max) {
      max = vote[i] 
      selected = i
    }
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
    </div>
  )
}
const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  })
  console.log("selected: ", selected)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={() => setSelected(getRandomInt(8))}>next anecdote</button>
      <button onClick={() => setVote(handleVoteClick(vote, selected))}>vote</button>
      
      <h1>Anecdote with moste votes</h1>
      <MostVotes vote={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App
