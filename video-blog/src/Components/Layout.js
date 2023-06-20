import React, { Children } from 'react'
import Nav from './Nav';

export default function Layout() {
  return (
    <div>
      <Nav/>
      <main className='main'>
        <div className='container'>
            {Children}
        </div>
      </main>
    </div>
  )
}
