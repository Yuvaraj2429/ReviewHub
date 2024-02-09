import React from 'react'
import '../Css/Style.css';
import { Link } from 'react-router-dom';
import { useAuth } from './Protected';

function Footer() {
  
  return (
    <>
    <div class="ribbon">
          <div class="row">
            <div class="col-lg-8">
              <div class="inside">
            Best Review Opportunity For All
            </div>

            </div>
            <div class="col-lg-4">
        <center>
        <button class="footer-btn"> <a href="tel:9360402940">Reach Us Soon</a></button>
      </center>
              </div>
          </div>
        </div>
      <div id="footer">
        
        <div class="row mx-5">
          <div class="col-lg-3">
          <div class="footercenter">
            <h4>QUICK LINKS</h4>
            <hr class="solid"></hr>
          
              <ul>
                <li><Link to="/Home" className="mylink">Home</Link></li>
                <li><Link to="/ReviewForm" className="mylink">Post Reviews</Link></li>
                <li><Link to="/ReviewList" className="mylink">View Reviews</Link></li>
                <li><Link to="/" className="mylink">Logout</Link></li>

              </ul>
            </div>
          </div>
          <div class="col-lg-3">
          <div class="footercenter">
            <h4>CATEGORIES</h4>
            <hr class="solid"></hr>
            
              <ul>
                <li><Link to="/Bank" className="mylink">Banking</Link></li>
                <li><Link to="/Travel" className="mylink">Travel</Link></li>
                <li><Link to="/Phone" className="mylink">Mobile Phones</Link></li>
                <li><Link to="/Laptop" className="mylink">Laptop</Link></li>

              </ul>
            </div>
          </div>
          <div class="col-lg-3">
          <div class="footercenter">
              <h4>OTHER CATEGORIES</h4>
              <hr class="solid"></hr>

              <ul>
                <li><Link to="/Herbal" className="mylink">Herbals</Link></li>
                <li><Link to="/Shoes" className="mylink">Shoes</Link></li>
                <li><Link to="/Fashion" className="mylink">Fashion</Link></li>
                <li><Link to="/Watches" className="mylink">Watches</Link></li>

              </ul>
            </div>
          </div>
          <div class="col-lg-3">
          <div class="footercenter">
            <h4>CONTACT US</h4>
            <hr class="solid"></hr>
            <ul>
           <li class="last"><a href="mailto:yuvarajyuvi2324@gmail.com">Email: yuvarajyuvi2324@gmail.com</a></li>
           <li class="last"><a href="tel:9360402940">Contact Number: 9360402940</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="final">
       Copyright © 2023. All Rights Reserved
      </div>
    </>
  )
}

export default Footer