import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




const Feed = ({ whistleData }) => {

  return (
    <div>
      <Box m={2} pt={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card sx={{ minWidth: 400, maxWidth: 400, minHeight: 100 }} style={{backgroundColor: '#ef798a', textAlign: 'center'}} >
        <CardContent>
            <Typography sx={{ fontSize: 20 }} color='white' gutterBottom>
              <h4>{whistleData?.fields.username}</h4>
          </Typography>
          <Typography sx={{fontSize: 16}} color='white'>
            {whistleData?.fields.post}
          </Typography>
        {/* <p>{whistleData?.fields.createdTime}</p> */}
        {/* gotta figure out this like button */}
        {/* <button type='submit'>Like</button> */}
        </CardContent>
      </Card>
    </Box>
    </div>
  )
}
export default Feed;
