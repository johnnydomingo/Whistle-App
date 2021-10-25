import axios from 'axios';
import { useState } from 'react';

import { Redirect, useParams } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Whistles?api_key=keyjukEQxfYibCtcU';

const NewPost = ({ props, toggleFetch, setToggleFetch}) => {
  const [post, setPost] = useState('');
  const [username, setUsername] = useState('');
  // const [redirectFeed, setRedirectFeed] = useState(false);

  
  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    
    
  
    
    const newWhistle = {
      'records': [{
        
        'fields': {
          'username': username,
          'post': post
        }
      }]
    }
    // console.log(newWhistle);
    await axios.post(API_URL, newWhistle);
    setToggleFetch(!toggleFetch);
    // setRedirectFeed(true);
  }
  // if (redirectFeed) {
  //     return <Redirect to='/feed'/>
  //   }
  
  return (
    <div>
      
      <form onSubmit={handlePostRequest}>
        <label htmlFor='username' />
        <input type='text' placeholder='Username' onChange={(ev) => setUsername(ev.target.value)}/>
        <textarea
          id='post'
          type='textbox'
          // data-emoji-input='unicode'
          // data-emojiable='true'
          placeholder='Share something...'
          onChange={(ev) => setPost(ev.target.value)}
        ></textarea>
        
        <input type='submit' />
        </form>
        
    </div>
  )
}

export default NewPost;