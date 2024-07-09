import { useState } from "react";

const Header = ({ children }) => {
    return (
        <>
            <h2>{children}</h2>
        </>
    );
};

const Button = ({ onClick, text }) => {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    );
};

const DiplayAnecdote = ({ header, anecdotes, points, index }) => {
    console.log(header, anecdotes, points, index);
    if (index == -1) {
        return;
    }
    return (
        <>
            <Header>{header}</Header>
            <p>{anecdotes[index]}</p>
            <p>has {points[index]} votes</p>
        </>
    );
};

const App = () => {
    const [selected, setSelected] = useState(0);

    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];
    const [points, setPoints] = useState(
        Array.from({ length: anecdotes.length }, () => 0)
    );

    const [indexMaxVotes, setIndexMaxVotes] = useState(-1);

    const randomIndex = () => {
        return Math.floor(Math.random() * anecdotes.length);
    };

    const vote = () => {
        const tmp = [...points];
        tmp[selected] += 1;
        setIndexMaxVotes(
            tmp.reduce((m, n, i) => (n > (tmp[m] ?? -Infinity) ? i : m), -1)
        );
        setPoints(tmp);
    };

    return (
        <>
            <DiplayAnecdote
                header="Anecdote of The Day"
                anecdotes={anecdotes}
                points={points}
                index={selected}
            />
            <Button
                onClick={() => setSelected(randomIndex)}
                text="Next Anecdote"
            />
            <Button onClick={vote} text="Vote" />
            <DiplayAnecdote
                header="Anecdote With Most Votes"
                anecdotes={anecdotes}
                points={points}
                index={indexMaxVotes}
            />
        </>
    );
};

export default App;
