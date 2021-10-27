import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const API_URL = 'https://api.airtable.com/v0/apph3EMCub9HXZcv5/Whistles?api_key=keyjukEQxfYibCtcU';

const NewPost = ({ currentUser, toggleFetch, setToggleFetch}) => {
  const [post, setPost] = useState('');
  const [username, setUsername] = useState('');

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
      <div className='intructions'>
        <i> How to use: Simply enter a username and starting whistling ☺ </i>
      </div>
      <Box>
        <form onSubmit={handlePostRequest}>
          <div className='username'>
            <label htmlFor='username' />
            <input type='text' placeholder='Username' onChange={(ev) => setUsername(ev.target.value)}/>
          </div>
          <TextField
          fullWidth
          style= {{ alignItems: 'center', paddingLeft: '150px', paddingRight: '150px', paddingTop:'70px' }}
          id='post'
          type='textbox'
          multiline
          rows={4}
          varient='filled'
          placeholder='Share something...'
          onChange={(ev) => setPost(ev.target.value)}
          />
          <Button
            className='button'
            style={{ marginTop: '40px', fontSize: '20px', width: '115px', backgroundColor: '#89aae6', color: 'white', alignItems: 'center' }}
            type='submit'>Whistle!
          </Button> 
        </form>
        </Box>
    </div>
  )
}

export default NewPost;