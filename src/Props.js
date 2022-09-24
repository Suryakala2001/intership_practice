import React from 'react'

function Welcome(Props){
  return (
    <div>
      <h1>
        Welcome {Props.name}<br></br>
      </h1>
      <p><h2> Hii {Props.name} <br></br> USN {Props.USN}<br></br> Sem{Props.Sem} <br></br>Email {Props.Email}<br></br>Branch {Props.Branch}</h2></p>
    </div>
  );
}

function Props() {
  return (
    <div>
      <Welcome name="Siri"  USN="4mk19cs053" Sem="7" Email="sirisurya@gmail.com"  Branch="CSE"/>
    </div>
  )
}

export default Props