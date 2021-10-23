import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed.js';
import Home from './components/Home.js';
import './App.css';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Home = () => {
    const [whistles, setWhistles] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);
  
    useEffect(() => {
      const getWhistles = async () => {
        const resp = await axios.get(API_URL);
        console.log(resp.data);
      }
      getWhistles();
    }, [toggleFetch]);


  return (
    <div>
      <nav>
        <Link to='/home'>Whistle!</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/about'>About</Link>
      </nav>
      <h1>Welcome to Whistle!</h1>
      <div>
      <Route path='/feed'>
          {whistles.map((whistle) => (
            <Feed
              key={whistle.id}
              whistleData={whistle}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </Route>
      </div>
      
    </div>
  )
}
export default Home;