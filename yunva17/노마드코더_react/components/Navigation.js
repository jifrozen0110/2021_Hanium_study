import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

// <a href>를 쓰면 페이지가 새로고침됨.
function Navigation(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;