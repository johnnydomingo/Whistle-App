import { Link } from 'react-router-dom';

const Nav = () => {
  // const hamburger = () => {

  // }


  return (
    <div>
      <nav class='navbar'>
        <div
          class='brand-name'>Whistle
        </div>
        <a href='#' class='hamburger'>
          <span class='line'></span>
          <span class='line'></span>
          <span class='line'></span>
        </a>
        <div class='links'>
          <ul>
            <li><a><Link to='/home'>Home</Link></a></li>
            <li><a><Link to='/feed'>Feed</Link></a></li>
            <li><a><Link to='/about'>About</Link></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;