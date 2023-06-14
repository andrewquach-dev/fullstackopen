import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positivePercentage}%`} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const hasFeedback = good + neutral + bad > 0;

  return (
    <div>
      <h2>Give feedback</h2>
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Good" handleClick={handleBadClick} />
      {hasFeedback ? (<Statistics good={good} neutral={neutral} bad={bad} />) : (<p>No feedback given</p>)}

    </div>
  )
}

export default App