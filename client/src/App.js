import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed.js';
import Home from './components/Home.js';
import './App.css';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

function App() {
  const [whistles, setWhistles] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getWhistles = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setWhistles(resp.data.records);
    }
    getWhistles();
  }, [toggleFetch]);


  document.title = "Whistle!";
  
    return (
      <div>
        <Home />

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
    );
}
export default App;
