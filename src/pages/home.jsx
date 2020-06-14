import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    const [counter, setCounter] = useState(0);

    const changeCount = () => {
        console.log("click");
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <Link to="/about">About</Link>
            </div>
            <p>Some content ... Counter: {counter}</p>
            <button onClick={changeCount}>Click me</button>
        </div>
    )
};

export default Home;