import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => <div>{props.text + " " + props.value}</div>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad 
  const average = (props.good - props.bad) / (props.good + props.neutral + props.bad)
  const positive = props.good / (props.good + props.neutral + props.bad) * 100 
  
  if (!props.good && !props.bad && !props.neutral) {
    return <div>No feedback given</div>
  }
  else {
    return (
    <div>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )
  }
}

const StatisticsTable = (props) => {
  const all = props.good + props.neutral + props.bad 
  const average = (props.good - props.bad) / (props.good + props.neutral + props.bad)
  const positive = props.good / (props.good + props.neutral + props.bad) * 100 
  
  if (!props.good && !props.bad && !props.neutral) {
    return <div>No feedback given</div>
  }
  else {
    return (
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive + " %"}</td>
        </tr>
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

  const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [array, setArray] = useState(new Array(anecdotes.length).fill(0))

  const [mostVotes, setMostVotes] = useState(0)

  const updateVotes = () => {
    console.log(array)
    
    const copy = [...array]
    copy[selected] += 1
    setArray(copy)

    if (copy[mostVotes] < copy[selected]) {
      setMostVotes(selected)
    }

    console.log("selected num is ", selected)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
   
      <Statistics good={good} neutral={neutral} bad={bad} />
      <p></p>
      <StatisticsTable good={good} neutral={neutral} bad={bad} />

      <h1>Anecdote section</h1>

      <p>{anecdotes[selected]}</p>
      <p>has {array[selected]} votes</p>
      <Button onClick={() => setSelected(Math.floor(anecdotes.length * Math.random()))} text="next anecdote"/>
      <Button onClick={updateVotes} text="vote pls" />

      <h1>Anecdotes with the most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {array[mostVotes]} votes</p>
      
    </div>
  )
}

export default App