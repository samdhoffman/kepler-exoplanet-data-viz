import React from "react"
import "./Layout.scss";
import { Nav, Navbar } from 'react-bootstrap'
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="Layout">
      <nav className="Navbar">
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Kepler Exoplanet Data Visualization</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
