import { Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Users?api_key=keyjukEQxfYibCtcU';

const Home = () => {
  // const [user, setUser] = useState('');
  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();
  //   setCurrentUser(user);

  //   const newUsername = {
  //     'records': [{
  //       'fields': {
  //         'username': user
  //       }
  //     }]
  //   }
  //   await axios.post(API_URL, newUsername);
    
  //   setToggleFetch(!toggleFetch);
  // }
  return (
    <div>
      {/* <div>
        <h1>Welcome to Whistle!</h1>
      </div> */}
      <div>
        <img className='image' src='https://i.imgur.com/4whjMuV.png'></img>
      </div>

      <div className='about-me'>
        <article>
          Here at Whistle, we aim to create a space for users to share anything on their mind in an instant. While most of our site is still under construction, users are able to make a simple post and view posts from other users in an up-to-date feed. The developers and management of Whistle thank you for being an early user and we are so excited to continue to create a great experience for you!
        </article>
      </div>
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