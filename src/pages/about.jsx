import React from 'react';
import {Link} from 'react-router-dom';

const About = () => (
    <div>
        <h1>About page</h1>
        <div>
            <Link to="/">Home</Link>
        </div>
        <p>Some content ...</p>
    </div>
);

export default About;