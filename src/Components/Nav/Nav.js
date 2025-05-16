import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            aria-label="Toggle navigation"
          />
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Apple Logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link as={Link} to="/mac" className="nav-link">
                Mac
              </Nav.Link>
              <Nav.Link as={Link} to="/iphone">
                iPhone
              </Nav.Link>
              <Nav.Link as={Link} to="/ipad">
                iPad
              </Nav.Link>
              <Nav.Link as={Link} to="/watch">
                Watch
              </Nav.Link>
              <Nav.Link as={Link} to="/tv">
                TV
              </Nav.Link>
              <Nav.Link as={Link} to="/music">
                Music
              </Nav.Link>
              <Nav.Link as={Link} to="/support">
                Support
              </Nav.Link>
              <Nav.Link as={Link} to="/search" aria-label="Search">
                <img src={search} alt="Search" />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" aria-label="Cart">
                <img src={cart} alt="Shopping Cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
