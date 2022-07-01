import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <Link to='/' className="navbar-brand" ><span className='navfrt'>a</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Discover </Link>
      </li>
      <li className="nav-item">
        <Link to='/Makeburger' className="nav-link" >Make Your Burger</Link>
      </li>
      
    </ul>
    <form className='ml-auto'>
        <button className='btn mr-3  navbgbtn1 '><i class="fas fa-phone-alt"></i> Call me Back</button>
        <button  className='btn mr-3' > 8 800 437-87-22</button>
        <button  className='btn mr-3'>Login</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar