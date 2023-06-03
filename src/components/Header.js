import React from 'react'

const Header = () => {
  return (
    <header className='header' id='header'>
        <nav className='nav container'>
            <a href='#home' className='nav__logo'>Coffee<span>.</span>co{' '}</a>
            <div className='nav__menu' id='nav-menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link active-link'>Home</a>
                    </li>
                    <li className='nav__item'>
                        <a href='#products' className='nav__link'>
                            Products
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#blog' className='nav__link'>
                            Blog
                        </a>
                    </li>
                </ul>
                </div>
                <div className='nav__close' id='nav-close'>
                    <i className='bx bx-grid-alt'></i>
                </div>
        </nav>
    </header>
    
  )
}

export default Header