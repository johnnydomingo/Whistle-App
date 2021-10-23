import axios from 'axios';
import { useEffect, useState } from 'react';


const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Table%201?api_key=keyjukEQxfYibCtcU';

const Feed = () => {
  const [whistles, setWhistles] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getWhistles = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
    }
    getWhistles();
  })



  return (
    <div>

    </div>
  )
}
export default Feed;