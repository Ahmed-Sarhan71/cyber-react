import React from 'react'

import { UserAuth } from '../context/AuthContext';



import { useNavigate } from 'react-router-dom';

import { Link} from "react-router-dom"
import { useRef } from "react";
const Home = () => {


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
    
    <section className="main">
          <div>
            <h2><br /><span>Welcome to Cyberlife</span></h2>
            <h3>Our website offers a range of services to help university students succeed, including academic coaching, tutoring, and study skills development. 
              Our team is dedicated to helping students achieve their goals and overcome any challenges they face. 
            </h3>
           
          </div>
        </section>
        <section   className="cards" id="services">
          <h2 className="title">Our Mission</h2>
          <h1 className="content">Helping university student take a step further to achieve their dreams </h1>

        </section>
        
        <section  className="cards contact" id="contact">
          <h2 className="title">Let's work together</h2>
          <div className="content">
            <div className="card">
              <div className="icon">
                <i className="fas fa-phone" />
              </div>
              <div className="info">
                <h3>whats app</h3>
                <p><a href="https://wa.me/+60172056659">+60 172056659</a></p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="info">
                <h3>Email</h3>
                <p><a href="https://www.google.com/">ahmedsarhan2971
                    @gmail.com</a>
                </p></div><p />
            </div>
          </div>
        </section>
        <footer className="footer">

          
          <p className="footer-title">Copyrights @ <span>Cyber Life 2022</span></p>
        </footer>
              </div>
          
          
         
      

        

  )
}

export default Home