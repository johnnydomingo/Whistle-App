import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Redirect, useParams } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Whistles?api_key=keyjukEQxfYibCtcU';

const NewPost = ({ currentUser, toggleFetch, setToggleFetch}) => {
  const [post, setPost] = useState('');
  const [username, setUsername] = useState('');
  // const [redirectFeed, setRedirectFeed] = useState(false);

  
  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    setUsername(currentUser);

    
    
  
    
    const newWhistle = {
      'records': [{
        
        'fields': {
          'username': username,
          'post': post,
          'Users': currentUser.id
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
      <Box>
      <form onSubmit={handlePostRequest}>
        <label htmlFor='username' />
        <input type='text' placeholder='Username' onChange={(ev) => setUsername(ev.target.value)}/>
          
          <TextField
          fullWidth
          style= {{ alignItems: 'center', paddingLeft: '150px', paddingRight: '150px', paddingTop:'70px' }}
          id='post'
          type='textbox'
          multiline
          rows={5}
          varient='filled'
          placeholder='Share something...'
          onChange={(ev) => setPost(ev.target.value)}
          />

          <Button
            
            type='submit'>Whistle!
            </Button> 
          
        </form>
        </Box>
    </div>
  )
}

export default NewPost;