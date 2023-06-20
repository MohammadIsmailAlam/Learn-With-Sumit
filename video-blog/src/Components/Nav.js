import React from 'react'
import Account from './Account'
import logo from '../Assets/images/logo-bg.png'

export default function Nav() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a href="index.html" className='brand'>
                        <img src={logo} alt='Learn with Sumit'/>
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul> 
            <Account />
        </nav>
    </div>
  )
}
