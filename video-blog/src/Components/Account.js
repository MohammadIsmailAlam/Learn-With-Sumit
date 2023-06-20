import React from 'react'

export default function Account() {
  return (
    <div className='account'>
      <span className= 'material-icon-outlined' title='Account'>
        account_circle
      </span>
      <a href={<i class="fa fa-sign-in" aria-hidden="true"></i>}>
        sign Up
      </a>
    </div>
  )
}
