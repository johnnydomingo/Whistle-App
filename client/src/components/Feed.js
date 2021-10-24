
const Feed = ({ whistleData }) => {

  return (
    <div>
      <h4>{whistleData?.fields.username}</h4>
      <p>{whistleData?.fields.post}</p>
      <p>{whistleData?.fields.createdTime}</p>
      <button type='submit'>Like</button>
    </div>
    
  )
}
export default Feed;