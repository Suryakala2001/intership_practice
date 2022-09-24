import logo from"./logo.svg";
import React from 'react'
// import "./App.css"
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';

function About(){
    return (
        <div>This is my About</div>
    )
}

function Contact(){
    return (
        <div>This is my contact</div>
    )
}

function NavBar() {
    return (
        <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    )
}
function App(){
    return (
        <div className="App">
        <BrowserRouter>
        <NavBar />
        </BrowserRouter>
        </div>
    )
}

export default About
