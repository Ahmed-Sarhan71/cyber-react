import React from 'react';
import { UserAuth } from '../context/AuthContext';



import { Link} from "react-router-dom"
import { useRef } from "react";


const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
        <section ref={mission} className="projects" id="projects">
          <h2 className="title">Our Services</h2>
          <div className="content">
            <div className="project-card">
              <div className="project-image">
                <img src="images/A+.jpg" />
              </div>
              <div className="project-info">
                <p className="project-category">calculate your GPA</p>
                <strong className="project-title">
                  <span>GPA calculator </span>
                  <a href="https://www.calculator.net/gpa-calculator.html" className="more-details" rel="noopener" target="blank">More details</a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img alt="conversion" src="images/file conversion.png" />
              </div>
              <div className="project-info">
                <p className="project-category"> convert pdf to word files and more</p>
                <strong className="project-title">
                  <span>Easy Conversion</span>
                  <a href="https://www.ilovepdf.com/" className="more-details" rel="noopener" target="blank">More details</a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="images/work3.jpg" />
              </div>
              <div className="project-info">
                <p className="project-category">MarketPlace for MMU students</p>
                <strong className="project-title">
                  <span>CyberMarket</span>
                  <a to="#" className="more-details">More details</a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="images/work4.jpg" />
              </div>
              <div className="project-info">
                <p className="project-category">News and upcoming events </p>
                <strong className="project-title">
                  {/* <span>Dev Books</span> */}
                  <a to="news.html" className="more-details">More details</a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="images/work5.jpg" />
              </div>
              <div className="project-info">
                <p className="project-category">rent an apartment near the campus</p>
                <strong className="project-title">
                  <span>Find an apartment</span>
                  <a  href="https://www.iproperty.com.my/rent/cyberjaya/all-residential/?maxPrice=1500" rel="noopener" target="blank" className="more-details">More details</a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img alt="hii" src="images/work6.jpg" />
              </div>
              <div className="project-info">
                <p className="project-category">Career Counselling and Internship </p>
                <strong className="project-title">
                  <span />
                  <a  href="/Career">More details</a>
                  <button >click</button>
                </strong>
              </div>
            </div>
          </div>
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
          
          
         
       

    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
    </div>
  
  );
};

export default Account;
