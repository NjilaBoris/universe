import "./Nav.css";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div class="nav-container">
          <div class="nav-bg"></div>
        </div>

        <div class="nav-mobile-header">
          <p class="nav-logo">Orbit Matter</p>
          <p class="nav-menu-toggle">Menu</p>
        </div>

        <div class="nav-overlay">
          <div class="nav-items">
            <div class="nav-item">
              <Link href="/">Index</Link>
            </div>
            <div class="nav-item">
              <Link href="/observatory">Observatory</Link>
            </div>
            <div class="nav-item">
              <Link href="/expedition">Expedition</Link>
            </div>
            <div class="nav-item">
              <Link href="/traces">Traces</Link>
            </div>
            <div class="nav-item">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
