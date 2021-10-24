import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const NewPost = ({ toggleFetch, setToggleFetch}) => {
  const [post, setPost] = useState('');
  const [username, setUsername] = useState('');
  // const [redirectFeed, setRedirectFeed] = useState(false);

  
  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    
    const newWhistle = {
      records: [{
        fields: {
          username,
          post
        }
      }]
    }
    console.log(newWhistle);
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
        <label htmlFor='username'/>
        <textarea
          id='post'
          type='textbox'
          data-emoji-input='unicode'
          data-emojiable='true'
          placeholder='Share something...'
          onChange={(ev) => setPost(ev.target.value)}
        ></textarea>
        <button type='submit'>Whistle</button>
        </form>
        
    </div>
  )
}

export default NewPost;