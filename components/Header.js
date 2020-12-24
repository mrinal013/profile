import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar bg="white" expand="lg" className="">
          <Navbar.Brand href="/">
            <p>Another Web Engineer</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item border-0">
                  <Link href="/">
                    <a className="text-dark">Home</a>
                  </Link>
                </li>
                <li className="list-group-item border-0">
                  <Link href="/blog">
                    <a className="text-dark">Blog</a>
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
