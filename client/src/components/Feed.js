
const Feed = ({ whistle }) => {

  
  
  return (
    <div>
      <h4>{whistle?.fields.username}</h4>
      <p>{whistle?.fields.post}</p>
      <p>{whistle?.fields.date}</p>
    </div>
    
  )
}
export default Feed;