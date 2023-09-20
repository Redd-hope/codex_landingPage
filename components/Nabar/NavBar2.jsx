'use client'
import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Link from "next/link";

function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Your Brand</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbar"
        onClick={() => setShowOffcanvas(!showOffcanvas)}
      />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link onClick={closeOffcanvas}>Home</Nav.Link>
          </Link>
          <Link href="/about">
            <Nav.Link onClick={closeOffcanvas}>About</Nav.Link>
          </Link>
          <Link href="/how-it-works">
            <Nav.Link onClick={closeOffcanvas}>How It Works</Nav.Link>
          </Link>
          <Link href="/faqs">
            <Nav.Link onClick={closeOffcanvas}>FAQs</Nav.Link>
          </Link>
          <Link href="/newsletter">
            <Nav.Link onClick={closeOffcanvas}>Newsletter</Nav.Link>
          </Link>
          <Link href="/contacts">
            <Nav.Link onClick={closeOffcanvas}>Contacts</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Offcanvas show={showOffcanvas} onHide={closeOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link href="/">
              <Nav.Link onClick={closeOffcanvas}>Home</Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link onClick={closeOffcanvas}>About</Nav.Link>
            </Link>
            <Link href="/how-it-works">
              <Nav.Link onClick={closeOffcanvas}>How It Works</Nav.Link>
            </Link>
            <Link href="/faqs">
              <Nav.Link onClick={closeOffcanvas}>FAQs</Nav.Link>
            </Link>
            <Link href="/newsletter">
              <Nav.Link onClick={closeOffcanvas}>Newsletter</Nav.Link>
            </Link>
            <Link href="/contacts">
              <Nav.Link onClick={closeOffcanvas}>Contacts</Nav.Link>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Navigation;
