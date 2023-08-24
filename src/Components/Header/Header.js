import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
   return(
    <div className="navbar">
     <Link to="/" className="link">Home</Link>
     <Link to="/posts"  className="link">Posts</Link>
    </div>
   )
}
export default Header;