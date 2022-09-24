
// import logo from"./logo.svg";
import React from 'react'
 import "./App.css"
 import Form from "./components/Form"
import { BrowserRouter,Routes, Route, Link} from 'react-router-dom'

function About(){
    return (
        <div>This is my About component</div>
    )
}

function Contact(){
    return (
        <div>This is my contact component</div>
    )
}
function Teams(){
  return (
    <div>This is my team section  <br></br>
    <p>Team Leader:Mehaboob Khan
       <br></br>Team members<br></br>Mubarak <br></br> Suryakala <br></br>Shreya <br></br> Hitha <br></br> Sneha<br></br> Mamatha<br></br>Neha<br></br> vidya<br></br>
    </p>
    </div>

  )
}


function NavBar() {
    return (
        <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/add-students">Add students</Link></div>
    )
}
function App(){
    return (
        <div className="App">
        <BrowserRouter>
        <NavBar /> 
        <Routes> 
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/add-students" element={<Form />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;
