import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Feed = ({ whistleData }) => {
  const [post, setPost] = ('');
  const [username, setUsername] = ('');
  const [toggleFetch, setToggleFetch] = useState(true);

  const handleSubmit = async (ev) => {
    ev.prevent.default();
    
    const newWhistle = {
      username,
      post,
    }
    console.log(newWhistle);

    await axios.post(API_URL, newWhistle);
    setToggleFetch(!toggleFetch);
  }

  
  return (
    <div className='whistle-post'>
        <form onSubmit={handleSubmit}>
          <h3>Whistle...</h3>
          <input value={post} onChange={(ev) => setPost(ev.target.value)} />
        </form>
      
    <div>
      <h4>{whistleData?.fields.username}</h4>
      <p>{whistleData?.fields.post}</p>
      <p>{whistleData?.fields.date}</p>
    </div>
    </div>
  )
}
export default Feed;