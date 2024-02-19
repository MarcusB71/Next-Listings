import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark fixed-top">
        <Container>
          <Navbar.Brand>Marcus Brown</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Listings</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default MainNav;
