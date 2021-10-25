import Card from '@mui/material/Card';




const Feed = ({ whistleData }) => {

  return (
    <Card varient='outlined'>
    <div>
      <h4>{whistleData?.fields.username}</h4>
      <p>{whistleData?.fields.post}</p>
      <p>{whistleData?.fields.createdTime}</p>
      {/* gotta figure out this like button */}
      {/* <button type='submit'>Like</button> */}
    </div>
    </Card>
  )
}
export default Feed;
