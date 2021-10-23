import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Feed from './components/Feed.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
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
        <Nav />
        <hr />
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/feed'>
          {whistles.map((whistle) => (
            <Feed
              key={whistle.id}
              whistleData={whistle}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          ))}
          <Form />
        </Route>
      </div>
    );
}
export default App;
