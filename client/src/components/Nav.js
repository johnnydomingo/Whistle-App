import { Link } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  

          

  return (
    <div>
      <nav className='navbar'>
        <div
          className='brand-name'>Whistle
        </div>
        { click ? 
          <div href='#' className='hamburger' onClick={handleClick}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          </div> :
            <div className='newMenu'>
              <Link to='/home'>Home</Link>
              <Link to='/feed'>Feed</Link>
              <Link to='/about'>About</Link>
            </div> }
        {/* refer back to handle click -  */}
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