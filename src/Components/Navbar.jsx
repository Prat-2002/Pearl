import React from 'react'
import { useNavigate } from "react-router-dom";
import pic from '../Images/Logo.png';

const Navbar = ({c}) => {
  const navigate = useNavigate();
  function abc1(){
    navigate('/');
  }
  function abc2(){
    navigate('/');
  }
   function abc3(){
    navigate('/review');
  }
  function logout(){
    navigate('/');
  }
  return (
    <div className='Nav'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2.5 shadow-sm">
  <div className="container"> 
    <a class="navbar-brand" href="#home" onClick={abc2}><img src={pic} alt='no-image' style={{ width: 120, height: 45 }}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#product" onClick={abc1}>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about" onClick={abc2}>AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href='#rvw' onClick={abc3}>Reviews</a>
        </li>  
      </ul>
      <div className="buttons">
      {/* <button onClick={logout} className="btn btn-outline-dark"> 
      <i className="fa fa-sign-in me-1"></i>
      LogOut</button> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar