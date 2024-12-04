import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    window.addEventListener("scroll", isSticky);
    return ()=>{
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky=(e)=>{
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
    header.classList.remove('is-sticky')
  }


 

  return (
    
    <header className="header-section">
      <Container>
       
          <Navbar expand="lg" className="p-0">
            {/* Logo Section  */}
            <Navbar.Brand>
              <NavLink to="/"> MyTripMate</NavLink>
            </Navbar.Brand>
            {/* End Logo Section  */}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              {/*mobile Logo Section  */}
              <Offcanvas.Header>
                <h1 className="logo">MyTripMate</h1>
                <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/*end mobile Logo Section  */}

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/" >
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/about-us" >
                    ABOUT US
                  </NavLink>
                  <HashLink className="nav-link" to="/#tours" >
                    TOURS
                  </HashLink>

                  <NavDropdown
                    title="DESTINATION"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                   
                      
                   <HashLink className="nav-link text-dark" smooth to="/#places">
  KERALA TOURS
</HashLink>
                  <HashLink className="nav-link text-dark" to="/#places" >
                    PONDICHERRY TOURS
                  </HashLink>
                  <HashLink className="nav-link text-dark" to="/#places" >
                    GOA TOURS
                  </HashLink>
                  
                   
                  </NavDropdown>
                  <HashLink className="nav-link" to="/#gallery" >
                    GALLERY
                  </HashLink>
                  <HashLink className="nav-link" to="/#contact" >
                    CONTACT
                  </HashLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
              <NavLink className="primaryBtn d-none d-sm-inline-block" to="/offers">
                Offers
              </NavLink>
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
              </li>
            </div>
          </Navbar>
    
      </Container>
    </header>
  );
};

export default Header;
