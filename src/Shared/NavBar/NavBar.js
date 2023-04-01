import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  
    return (
        <div className=" mainHeader ">
        <div className=" container">
          <div className="firstHeader">
            <nav className="navbar container ">
              <div className="container-fluid">
                <Link className="navbar-brand " to="/">
                  <div className="drop-cont d-flex clearfix">
                    <ul className="dropdown-list-anima">
                      <li>
                        English <i className="fa-solid fa-chevron-down"></i>
                        <ul>
                          <li>
                            <Link to='/'>Satu</Link>
                          </li>
                          <li>
                            <Link to='/'>Dua</Link>
                          </li>
                          <li>
                            <Link to='/'>Tiga</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
  
                    <ul className="dropdown-list-anima">
                      <li>
                        USA <i className="fa-solid fa-chevron-down"></i>
                        <ul>
                          <li>
                            <Link  to="/">Bangla</Link>
                          </li>
                          <li>
                            <Link  to="/">Hindi</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className="ms-auto">
                  <div className="contact_signIn">
                    <ul className="d-flex align-items-end  mb-0 help_join_sign">
                      <li>
                        <Link to="/help">Help</Link>
                      </li>
                      <li>
                        <Link to="/">Join Us</Link>
                      </li>
                      <li>
                        <Link to="/reg">Sign In</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="secondHeader"></div>
        </div>
  
        {/* ------------main header start----------- */}
  
        <div className="header-navBar  container">
          <div className="d-flex justify-content-between">
            <div className="main_logo">
              <img src="https://i.ibb.co/xLnLPMB/logo.png" alt="" />
            </div>
            {/* -----------2------- */}
  
            <div className="nav_link">
              <ul className="nav_Links d-flex">
                <li className="list-1 nev_dropdownLink">
                  <NavLink to="/">Home <i className="fa-solid fa-chevron-down"></i></NavLink>
  
                  <ul className="list--home">
                    <li>
                      <NavLink to="/">Home-Electronics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Home-NFT</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Home-Fashion</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Home-Jewellery</NavLink>
                    </li>
                  </ul>
                </li>
  
                <li className="list-1 nev_dropdownLink">
                  <NavLink to="/">Shop <i className="fa-solid fa-chevron-down"></i></NavLink>
                  <ul className="list--home">
                    <li>
                      <NavLink to="/">Shop With Sidebar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Shop No Sidebar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Product Variation 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Product Variation 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Product Variation 3</NavLink>
                    </li>
                  </ul>
                </li>
  
                <li className="list-1 nev_dropdownLink">
                  <NavLink to="/">Pages <i className="fa-solid fa-chevron-down"></i></NavLink>
                  <ul className="list--home">
                    <li>
                      <NavLink to="/">Wishlist</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Cart</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Checkout</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Account</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Sign In</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Forgot Password</NavLink>
                    </li>
                  </ul>
                </li>
  
                <li className="list-1"><NavLink to='/'>About</NavLink></li>

  
                <li className="list-1">
                  <NavLink to="/">Contact</NavLink>
                </li>
              </ul>
            </div>
  
            {/* -------social media icon------- */}
            <div className='main--social-icon d-flex'> 
              <div className='social_media_icons'>
              <Link className='text-white' to='/'><i className="fa-solid fa-magnifying-glass"></i></Link>
              </div>
              <div className='social_media_icons'>
              <Link className='text-white' to='/'><i className="fa-regular fa-heart"></i></Link>
              </div>
              <div className='social_media_icons'>
              <Link className='text-white' to='/'><i className="fa-solid fa-cart-plus"></i></Link>
              </div>
              <div className='social_media_icons'>
              <Link className='text-white' to='/'><button className='user_button'><i className="fa-regular fa-user"></i></button></Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* ------------main header end----------- */}
      </div>
    );
};

export default NavBar;