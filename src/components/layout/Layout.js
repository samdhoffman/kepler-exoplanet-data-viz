import React from "react"
import "./Layout.scss";
import { Nav, Navbar } from 'react-bootstrap'
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="Layout">
      <nav className="Navbar">
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
      <main className="content">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
