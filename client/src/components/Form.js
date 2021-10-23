import axios from 'axios';
import { useState } from 'react';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Form = ({ toggleFetch, setToggleFetch }) => {
  const [post, setPost] = ('');
  // const [username, setUsername] = ('');
  // const [toggleFetch, setToggleFetch] = useState(true);

  const handleSubmit = async (ev) => {
    ev.preventdefault();
    
    const newWhistle = {
      // username,
      post,
    }
    console.log(newWhistle);

    await axios.post(API_URL, newWhistle);
    setToggleFetch(!toggleFetch);
  }
  return (
    <div className='whistle-post'>
        <form onSubmit={handleSubmit}>
          <label>Whistle...
        <textarea value={post} onChange={(ev) => setPost(ev.target.value)} />
        </label>
        <button type='submit'>Whistle</button>
        </form>
    </div>
  )
}

export default Form;