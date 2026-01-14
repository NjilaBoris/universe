import "./Nav.css";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-bg"></div>
        </div>

        <div className="nav-mobile-header">
          <p className="nav-logo">Orbit Matter</p>
          <p className="nav-menu-toggle">Menu</p>
        </div>

        <div className="nav-overlay">
          <div className="nav-items">
            <div className="nav-item">
              <Link href="/">Index</Link>
            </div>
            <div className="nav-item">
              <Link href="/observatory">Observatory</Link>
            </div>
            <div className="nav-item">
              <Link href="/expedition">Expedition</Link>
            </div>
            <div className="nav-item">
              <Link href="/traces">Traces</Link>
            </div>
            <div className="nav-item">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
