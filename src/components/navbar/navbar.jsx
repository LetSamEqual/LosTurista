import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div class="curtain">
      <div class="curtain__wrapper">
        <input type="checkbox" checked />

        <div class="curtain__panel curtain__panel--left"></div>

        <div class="curtain__prize"></div>

        <div class="curtain__panel curtain__panel--right"></div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar">
<button onClick={()=>{setIsNavbarOpen(!isNavbarOpen)}}>OOO</button>
</div>
<div className={isNavbarOpen? "expandedNavbar" : "closedNavbar"}>
<h1>Out of Office</h1>
<ul>
    <li>Who is this man?</li>
    <li>Where is he going?</li>
    <li>What has he written now?</li>
    <li>I’m homesick</li>
</ul>
</div> */
}
