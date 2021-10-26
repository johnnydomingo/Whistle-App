import { Link } from 'react-router-dom';

const Nav = () => {
  // const hamburger = () => {

  // }


  return (
    <div>
      <nav className='navbar'>
        <div
          className='brand-name'>Whistle
        </div>
        <a href='#' className='hamburger'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </a>
        <div className='links'>
          <ul>
            <li>
              <a>
                <Link to='/home'>Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to='/feed'>Feed</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to='/about'>About</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;