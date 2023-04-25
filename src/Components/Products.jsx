import React,{useState} from 'react';
import prd1 from '../Images/prd1.webp';
import prd2 from '../Images/prd2.webp';
import prd3 from '../Images/prd3.webp';
import prd4 from '../Images/prd4.webp';
import Navbar from './Navbar';

const Products = () => {
  const[count,setCount]=useState(0);
  function plus(){
    setCount(prev=>prev+1);
  }
  return (
    <div className='prdtitt' id='product'>
        <hr />
    <center>
    <div className='prdtit'>
        <header class="SectionHeader">
            <h3 class="SectionHeader__SubHeading Heading u-h6">WELCOME TO PEARL</h3>
        <div class="SectionHeader__Description Rte">
                <p>We are a proud homegrown fashion brand, making products locally &amp; shipping straight to you.</p>
                <p></p>
                <p>That's how you get premium quality without paying a premium.</p>
        <hr/>
                <p></p>
                <div>
                <button  className="btnnn"> 
      Cart ({count})</button>
                </div>
                <h3>OUR PREMIUM PRODUCTS</h3>
                <p></p>
              </div>
              </header>
    </div>
        <hr/>
        </center>
        <div className='prd'>
            <div className='prdt' >
            <img src={prd1} alt='...' />
            <button className='btnn' onClick={plus}>+ ADD</button>
            <p>MOTHER OF PEARL GOLD MAGNETIC CLOVER HEART NECKLACE</p>
            </div>
            <div className='prdt' >
            <img src={prd2} alt='...' />
            <button className='btnn' onClick={plus}>+ ADD</button>
            <p>AQUARIS NECKLACE | EARRING SET</p>
            </div>
            <div className='prdt' >
            <img src={prd3} alt='...' />
            <button className='btnn' onClick={plus}>+ ADD</button>
            <p>DUAL BUTTERFLY MOTHER OF PEARL NECKLACE</p>
            </div>
            <div className='prdt' >
            <img src={prd4} alt='...' />
            <button className='btnn' onClick={plus}>+ ADD</button>
            <p>COUPLE HOWLITE AND BLACK ONYX BRACELET</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Products
// export {countn};