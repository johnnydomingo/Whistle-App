import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Form = ({ toggleFetch, setToggleFetch}) => {
  const [post, setPost] = useState('');
  const [redirectFeed, setRedirectFeed] = useState(false);
  // const [username, setUsername] = ('');
  // const [toggleFetch, setToggleFetch] = useState(true);

  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    
    const newWhistle = {
      records: [{
        fields: {
          post
        }
      }]
    }

    // username,
    console.log(newWhistle);

    await axios.post(API_URL, newWhistle);
    setToggleFetch(!toggleFetch);
    setRedirectFeed(true);
  }
  if (redirectFeed) {
      return <Redirect to='/feed'/>
    }
  return (
    <div>
        <form onSubmit={handlePostRequest}>
          <label htmlFor='post'>Whistle...</label>
        <textarea type='text' id='post' onClick={(ev) => setPost(ev.target.value)} />
        <button type='submit'>Whistle</button>
        </form>
    </div>
  )
}

export default Form;