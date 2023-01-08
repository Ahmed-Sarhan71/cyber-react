import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (


    
    <div>
<div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" link="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link rel="stylesheet" link="cyberlife.css" />
            <title>CyberLife</title>
           
    
      
            <section className="main">
              <div>
                <h2><br /><span>Welcome to Cyberlife</span></h2>
                <h3>Our website offers a range of services to help university students succeed, including academic coaching, tutoring, and study skills development. 
                  Our team is dedicated to helping students achieve their goals and overcome any challenges they face. 
                </h3>
                <a onClick={handleGoogleSignIn}  className="main-btn">LOG IN</a>
 
              </div>
            </section>
            <section className="cards" id="services">
              <h2 className="title">Our Mission</h2>
              <h1 className="content">Helping university student take a step further to achieve their dreams </h1>
              
            </section>
            <footer className="footer">
              <p className="footer-title">Copyrights @ <span>Cyber Life 2022</span></p>
            </footer>
          </div>
      
      
     
    </div>
  );
};

export default Signin;
