
const Feed = ({ whistleData }) => {

  return (
    <div>
      <h4>{whistleData?.fields.username}</h4>
      <p>{whistleData?.fields.post}</p>
      <p>{whistleData?.fields.createdTime}</p>
      {/* gotta figure out this like button */}
      {/* <button type='submit'>Like</button> */}
    </div>
    
  )
}
export default Feed;