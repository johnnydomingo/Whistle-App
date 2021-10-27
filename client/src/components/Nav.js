import { Link } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {
  // const [click, setClick] = useState(true);
  // // const [menu, setMenu] = useState(false);

  // const handleClick = () => setClick(!click);
  
  // const showMenu = () => {
  //   if (window.innerWidth > 501) {
  //     setMenu(true);
  //   } else {
  //     setMenu(true);
  //   }
  // };
  return (
    <div>
      <nav className='navbar'>
        <div
          className='brand-name'>Whistle
        </div>
          {/* {click ? window.innerWidth > 501 && */}
          {/* // click is true OR window is larger than 500px */}
          <div href='#' className='hamburger'>
            {/* <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span> */}
          </div>  <div className='links'>
            {/* {menu && showMenu} */}
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
          {/* </div> } */}
      </nav>
    </div>
  )
}

export default Nav;