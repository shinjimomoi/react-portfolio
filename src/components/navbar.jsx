import React from 'react';

const Navbar = () => {

    const [ navbar, setNavbar ] = React.useState(false)

    const changeBackground = () => {
      window.scrollY > 20 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener("scroll", changeBackground)

    return (
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className='p-5 flex flex-between align-center dark-bg '>
          <h3 className='pt-2 primary'>SM</h3>
          <ul className='white flex'>
            <li className='ms-5'><a className='white' href="#about">About</a></li>
            <li className='ms-5'><a className='white' href="#projects">Projects</a></li>
            <li className='ms-5'><a className='white' href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;
