import { Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Users?api_key=keyjukEQxfYibCtcU';

const Home = ({ setCurrentUser, toggleFetch, setToggleFetch}) => {
  const [user, setUser] = useState('');
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setCurrentUser(user);

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
      <div style={{
        position: 'relative', width: '100%', height: '0', paddingTop: '100.0000%',
        paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
        borderRadius: '8px', willChange: 'transform'
      }}>
  <iframe loading='lazy' style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEt7a0dka8&#x2F;watch?embed">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEt7a0dka8&#x2F;watch?utm_content=DAEt7a0dka8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Peach Speech Bubble Animals &amp; Pets Logo</a> by Johnny Domingo
      
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor='username'></label>
        <input
          typ='text'
          value={user}
          placeholder='Enter a username'
          onChange={(ev) => setUser(ev.target.value)}
        /> */}
        {/* <Link to='/feed'>  */}
        {/* <Button varient='contained' type='submit'>Submit</Button> */}
        {/* </Link>  */}
      {/* </form>  */}

    </div>
  )
}
export default Home;