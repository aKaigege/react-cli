import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './header.styl'
export default () => {
  return (
    <div style={styles.wrap}>
      <Link exact to='/' className='link' activeClassName='active'>Home</Link>
      <Link to='/page1' className='link' activeClassName='active'>Page1</Link>
      <Link to='/page2' className='link' activeClassName='active'>page2</Link>
      <Link to='/login' className='link' activeClassName='active'>Login</Link>
    </div>
  )
}
const styles = {
  wrap: {
    height: '100px',
    width: '100%',
    fontSize: '18px',
    color: '#000'
  }
}
