import React from 'react'
import Logo from '../images/Logo.png';
import '../styles/Footer.css'

const Footer = () => {
return (
  <div className='footer-main'>
    <div className='footer-top'>
      <img src={Logo} alt="" height={50} width={200} className="logo" />
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
    </div>
    <div className='footer-search '>
      <div className='footer-search-left'>
        <h2>Get Expert Tips In Your Inbox</h2>
        <p>Get Expert Tips In Your Inbox</p>
      </div>
          <div class="Footer-search-container">
            <input type="text" class="Footer-Subsribe-box" placeholder="Enter your email"/>
            <button class="Footer-button">Subsribe</button>
      </div>
    </div>
              <div className='footer-five-section'>
                <div className='box'>
                  <h4>Social</h4>
                  <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                  </ul>
              </div>
              <div className='box'>
                  <h4>Contact</h4>
                  <ul>
                      <li>Contact us</li>
                      <li>example1@gmail.com</li>
                      <li>example2@gmail.com</li>
                      <li>Call Us: +1 245 8948-4343</li>
                  </ul>
              </div>
              <div className='box'>
                  <h4>Our Information</h4>
                  <ul>
                    <li>privicy policy</li>
                    <li>Term And Condition</li>
                    <li>Support Page</li>
                  </ul>
              </div>
              <div className='box'>
                  <h4>About</h4>
                  <ul>
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>Copywrite</li>
                  </ul>
              </div>
              <div className='box'>
                <h4>Top Categoreies</h4>
                  <ul>
                    <li>Men's Wear</li>
                    <li>Men's Wear</li>
                    <li>Men's Wear</li>
                    <li>Men's Wear</li>
                  </ul>
              </div>
            </div>
            <hr />
            <p>Copyright © 2023 We Have and You HaveAll rights reserved</p>
  </div>
)}

export default Footer