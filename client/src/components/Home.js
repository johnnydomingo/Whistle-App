import { Route, Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Whistle!</h1>
        </div> 
      <form>
        <label htmlFor='username'></label>
        <input
          type='text'
          name='username'
          placeholder='Enter a username'
          

        />
      </form>

    </div>
  )
}
export default Home;