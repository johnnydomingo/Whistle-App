import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Users?api_key=keyjukEQxfYibCtcU';

const Home = ({ props, toggleFetch, setToggleFetch}) => {
  const [user, setUser] = useState('');
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    props.setCurrentUser({
      user
    });

    const newUsername = {
      'records': [{
        'fields': {
          'username': user
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
          typ='text'
          value={user}
          placeholder='Enter a username'
          onChange={(ev) => setUser(ev.target.value)}
        />
        {/* <Link to='/feed'>  */}
        <Button varient='contained' type='submit'>Submit</Button>
        {/* </Link>  */}
      </form> 

    </div>
  )
}
export default Home;