import { Route, Link } from 'react-router-dom';

const Home = () => {



  
  return (
    <div>
      <nav>
        <Link to='/home'>Whistle!</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/about'>About</Link>
      </nav>
      <h1>Welcome to Whistle!</h1>

      
    </div>
  )
}
export default Home;