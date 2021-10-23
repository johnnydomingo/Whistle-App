import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Home = ({toggleFetch, setToggleFetch}) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const newUsername = {
      records: [{
        fields: {
          username
        }
      }]
    }
    await axios.post(API_URL, newUsername);
    setToggleFetch(!toggleFetch);
  }




  return (
    <div>
      <div>
        <h1>Welcome to Whistle!</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'></label>
        <input
          value={username}
          placeholder='Enter a username'
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Link to='/feed' exact>
        <button type='submit'>Submit</button>
        </Link>
      </form>

    </div>
  )
}
export default Home;