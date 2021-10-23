
const Feed = ({ whistleData }) => {

  return (
    <div>
      <h4>{whistleData?.fields.username}</h4>
      <p>{whistleData?.fields.post}</p>
      <p>{whistleData?.fields.date}</p>

    </div>
  )
}
export default Feed;