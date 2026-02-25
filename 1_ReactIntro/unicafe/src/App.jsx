import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticLine = (props) => <tr><td>{props.text}</td> <td>{props.value}</td></tr>



const Statistics = ({ good, neutral, bad }) => {

  const sumEstimate = () => good + neutral + bad
  const averageValue = () => (good * (1) + bad * (-1)) / sumEstimate()
  const positivePercentage = () => `${(good / sumEstimate()) * 100} %`

  if (sumEstimate() === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={sumEstimate()} />
      <StatisticLine text='average' value={averageValue()} />
      <StatisticLine text='positive' value={positivePercentage()} />
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodEstimate = () => {
    setGood(good + 1)
  }

  const neutralEstimate = () => {
    setNeutral(neutral + 1)
  }

  const badEstimate = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={'give feedback'} />

      <Button onClick={goodEstimate} text={'good'} />
      <Button onClick={neutralEstimate} text={'neutral'} />
      <Button onClick={badEstimate} text={'bad'} />

      <Header text={'statistics'} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App