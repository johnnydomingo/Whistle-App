import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




const Feed = ({ whistleData }) => {

  return (
    <div>
      <Box m={2} pt={3} style={{justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 400 }} style={{backgroundColor: 'skyBlue', textAlign: 'center'}} >
        <CardContent>
          <Typography sx={{fontSize: 20}} gutterBottom><h4>{whistleData?.fields.username}</h4>
          </Typography>
          <Typography sx={{fontSize: 16}} color='blue'>
            {whistleData?.fields.post}
          </Typography>
        <p>{whistleData?.fields.createdTime}</p>
        {/* gotta figure out this like button */}
        {/* <button type='submit'>Like</button> */}
        </CardContent>
      </Card>
    </Box>
    </div>
  )
}
export default Feed;
