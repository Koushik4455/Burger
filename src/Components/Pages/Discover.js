import React from 'react'
import { Link } from 'react-router-dom'

const Discover = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5 dismake'>
                <h1 className='dismkfz'>Make</h1>
                <h1 className='dismkfz'>your</h1>
                <h1 className='dismkfz'>Burger</h1>
                </div>
                <div className='col-sm-7'>
                    <img src='./Images/burger1.png' className='disimg ml-5' width='80%'></img>
                   <Link to='/Makeburger'> <buttom className='btn disbgbtn2'>MAKE<br/> BURGER</buttom></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover