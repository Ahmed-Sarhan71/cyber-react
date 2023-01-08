import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import { ReactDOM } from "react";

import { useRef } from "react";
import { useNavigate} from "react-router-dom"
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  const top= useRef(null);
  const mission = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const scrollToSection=(elementRef) => {
    window.scrollTo({
top : elementRef.current.offsetTop,
behavior: 'smooth'
    });
  }



  return (




<div>

<header ref={top}>
          <Link onClick={()=> scrollToSection(top)} className="logo">CyberLife</Link>
          <nav className="navigation">
            <Link onClick={()=> scrollToSection(mission)} to="/mission">Our Mission</Link>
            <Link onClick={()=> scrollToSection(services)} to="/services">Services</Link>
            <Link onClick={()=> scrollToSection(contact)} to="/contact">Contact</Link>
          
          {user?.displayName ? (
        <Link onClick={handleSignOut}>Logout</Link>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
          </nav>
        </header>






    {/* <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        CyberLife
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div> */}
    </div>
  );
};

export default Navbar;
