import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <div>
          <h4 className='brand-name'>Whistle</h4>
          
        </div>
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