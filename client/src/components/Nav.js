import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to='/home'>Whistle!</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/about'>About</Link>
      </nav>
    </div>
  )
}

export default Nav;