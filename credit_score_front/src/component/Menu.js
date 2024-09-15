// mon css
import '../App.css';



// mon boostrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//mes pages
import About from'./About.js';
import Prediction from './Prediction.js';
import Contact from'./Contact.js';

//login
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from 'react';

//Boutton Sign out
import { Button } from 'react-bootstrap';



function Menu() {

    // log out parametrage cheminement :
    const [activeTab, setActiveTab] = useState('login');


    //cacher la tab du login lor du login :
    const [showLoginTab, setShowLoginTab] = useState(true);  // Contrôle l'affichage de l'onglet login


    const handleLogin = () => {
        setShowLoginTab(false); // cacher le l'onglet
        document.getElementsByClassName("signout")[0].style.display = "block";
        document.getElementsByClassName("menu1")[0].style.opacity = "1";
        setActiveTab('About'); // le met dans la premiere page
        
    };

    const handleLogout = () => {
        setShowLoginTab(true); // afficher l'onglet
        document.getElementsByClassName("signout")[0].style.display = "none";
        setActiveTab('login'); // Réinitialise l'onglet actif à "login" après la déconnexion
    };
    // FIN LOGIN parametrage



  return (
    <div className="menu1" >
      <Button className="signout" variant="outline-light" onClick={handleLogout} style={{display:'none'}}  >
              Sign out
      </Button>
      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)} // Met à par defaut l'onglet actif.
        
      >

          {!showLoginTab && (
                  <Tab eventKey="About" title="A propos" className="menu1">
                      <About />
                  </Tab>
          )}
          {!showLoginTab && (          
                  <Tab eventKey="prediction" title="Prédiction" className="menu1">
                      <Prediction />
                  </Tab>
          )}
          {!showLoginTab && (        
                  <Tab eventKey="contact" title="Contact" className="menu1">
                      <Contact />
                  </Tab>
          )}
          
          {showLoginTab && (
              <Tab eventKey="login" title="Sign in" className="menu1">
                <div className="Auth-form-container" style={{display:'inline-block', marginRight:'15%'}}>    
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="form-group mt-3">
                                    <label className="Auth-form-title" >Email address</label>
                                    <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className="Auth-form-title" >Password</label>
                                    <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="button" className="btn btn-primary" onClick={handleLogin}>
                                    Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right mt-2" className="Auth-form-title" >
                                    Forgot <a href="#">password?</a>
                                </p>
                                </div>
                            </form>
                        </div>

                        <div className="home2" style={{display:'inline-block', marginRight:'10%'}}>
                          <br />
                          <h3> 
                              Découvrez Home Credit
                              <br />
                              <br />
                              Révolutionnez votre expérience de crédit
                              <br />
                              <br />
                              Précision, transparence, et innovation à votre service !
                              <br />
                            </h3>
                          <br />
                        </div>
              </Tab>

          )}
          

      </Tabs>
      
      <br />
      
    </div>
  );
}

export default Menu;