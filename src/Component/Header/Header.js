import React, { useEffect, useState } from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const siteLogo = "PickBazar.webp";
  const [logindata, setloginData] = useState([]);

  const emailValid = () =>{
    const getUser = localStorage.getItem("user_login")

    if(getUser && getUser.length){
      const user = JSON.parse(getUser);
      console.log("email",user);
      setloginData(user);

      const useremail = logindata.map((el,k)=>{
        return el.email === user
      });
      
      if(useremail){
        setTimeout(()=>{
          console.log("ok");
        }, 300)
      }
    }

  }

  const userLogout = () =>{
    localStorage.removeItem("user_login");
  }

  useEffect(()=>{
    emailValid();
  }, [])



  return (
    <header>
      <div className="header_section py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="site_logo">
                <a href="/" className="d-block">
                  <img src={siteLogo} alt="site logo" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-10">
              <nav className="navbar navbar-expand-lg p-0">
                <div className="navbar-fluid w-100 d-flex">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse justify-content-end navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="index"
                        >
                          Shop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index">
                          Offers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index">
                          Contact
                        </a>
                      </li>
                    </ul>
                    
                  </div>
                  {logindata.length === 0 ? <div className="login_button">
                      <Link className="btn btn-primary" to="/login">Login</Link>
                      {console.log("login", logindata)}
                    </div> : 
                    <div className="login_button">
                    <Button type="submit" variant="primary" onClick={userLogout} >Logout </Button>
                    {console.log("Logout", logindata)}
                  </div>
                   }
                  <div className="cart-box">
                    <button className="btn-cart-box">
                      <span className="cart-count">
                        <svg width="14" height="16" className="shrink-0" viewBox="0 0 12.686 16"><g transform="translate(-27.023 -2)"><g transform="translate(27.023 5.156)"><g><path d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z" transform="translate(-53.023 -101.005)" fill="currentColor"></path></g></g><g transform="translate(30.274 2)"><g><path d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z" transform="translate(-157.039)" fill="currentColor"></path></g></g></g></svg>
                        <span className="flex ltr:ml-2 rtl:mr-2">1 Item</span>
                      </span>
                      <span className="cart-amount">$3.20</span>

                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
