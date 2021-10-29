import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Nav from './components/Nav.js';
import NewPost from './components/NewPost.js';
import Footer from './components/Footer.js';
import './Home.css';
import './Footer.css';
import './About.css';
import './NewPost.css';
import './App.css';


const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Whistles?api_key=keyjukEQxfYibCtcU';

function App() {
  const [whistles, setWhistles] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getWhistles = async () => {
      const resp = await axios.get(API_URL);
      setWhistles(resp.data.records);
    }
    getWhistles();
  }, [toggleFetch]);


document.title = "Whistle!";
  
  whistles.sort(function (a, b) {
    let time1 = new Date(a.createdTime);
    let time2 = new Date(b.createdTime);
    return time2 - time1;
    
  });
  
  return (  
      <div>
        <Nav />
        <Route path='/home' exact>
        <Home
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/feed'>
        <NewPost
          formType={'post'}
          currentUser={currentUser}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
          {whistles.map((whistle) => (
            <Feed
              key={whistle.id}
              currentUser={currentUser}
              whistleData={whistle}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          ))}
          </Route>
        <Footer />
      </div>
    );
}
export default App;
