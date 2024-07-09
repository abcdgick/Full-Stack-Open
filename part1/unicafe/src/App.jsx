import { useState } from "react";

const Header = ({ children }) => {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
};

const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

const StatisticsLine = ({ text, value }) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    let total = good + neutral + bad;
    let average = (good - bad) / total;
    let positive = (good / total) * 100 + "%";

    if (total === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        );
    }
    return (
        <>
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={good} />
                    <StatisticsLine text="Neutral" value={neutral} />
                    <StatisticsLine text="Bad" value={bad} />
                    <StatisticsLine text="All" value={total} />
                    <StatisticsLine text="Average" value={average} />
                    <StatisticsLine text="Positive" value={positive} />
                </tbody>
            </table>
        </>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <Header>Give Feedback</Header>
            <Button onClick={() => setGood(good + 1)}>Good</Button>
            <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
            <Button onClick={() => setBad(bad + 1)}>Bad</Button>
            <Header>Statistics</Header>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
