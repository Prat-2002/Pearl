import React from 'react';
import pic1 from '../Images/rvw1.jpg';
import pic2 from '../Images/rvw2.webp';
import pic3 from '../Images/rvw3.jpg';
import pic4  from '../Images/rvw4.jpg';
import Navbar from './Navbar';
const Review = () => {
  return (
    <div className='rvw' id='rvw'>
      <Navbar />
        <div className='rvw1'> 
          <center>
            <h1>OUR HONEST CUSTOMERS</h1>
          <h5>WHY WE DO, WHAT WE DO</h5>
          <h2>OUR HAPPY CUSTOMERS</h2>
          <p>Here are all our valuable and authentic reviews, pulled in from all our products across the store. We really do love to hear our customers out, whether it's positive or negative feedback. On a quest to provide the best quality and value to you, our aim is to improve continuously. Simply click on any review then click on the bottom to go to the mentioned product.</p>
          </center>
            <hr />
        </div>
        <div className='rvw2'>
            <div className='rvw21' >
            <img src={pic1} alt='...' />
            <p>Thanks for this beautiful product, i loved it and I gifted it to my best friend and she loved it...</p>
            </div>
            <div className='rvw21'>
            <img src={pic2} alt='...' />
            <p>I love the fact that the crystals are actually beaded on thread instead of an elastic and has a magnetic clasp. The design is unique and the best part is that the crystals actually work.

I have seen a shift in my energies within 4 days of wearing the bracelet! 

Believe in energies, this is a must have bracelet!</p>
            </div>
            <div className='rvw21' >
            <img src={pic3} alt='...' />
            <p>Thanks for this beautiful product, i loved it and I gifted it to my best friend and she loved it...</p>
            </div>
            <div className='rvw21' >
            <img src={pic4} alt='...' />
            <p>I love the fact that the crystals are actually beaded on thread instead of an elastic and has a magnetic clasp. The design is unique and the best part is that the crystals actually work.

I have seen a shift in my energies within 4 days of wearing the bracelet! 

Believe in energies, this is a must have bracelet!</p>
            </div>
        </div>
    </div>
  )
}

export default Review