import React from 'react'
import { Helmet } from 'react-helmet';

const Home = () => (
    <div className="home container">
        <Helmet>
            <title>My SSR App</title>
        </Helmet>
        <div>
            <h1>Home</h1>
        </div>
    </div>
);

export default Home;
