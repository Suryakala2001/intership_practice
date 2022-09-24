import React,{ useState} from 'react'


function Form() { 
  const [name,setName]= useState('Surya');
  const [email,setEmail]= useState('Surya@gmail.com');
  const [usn,setUsn]= useState('4mk19cs053');
  const [phoneno,setPhoneno]= useState('9845214529');
  const [branch,setBranch]= useState('CSE');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      usn: usn,
      phoneno: phoneno,
      branch: branch
    }
   console.log(data); 
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
      <input type="text" value={name} placeholder="Student name" onChange={(e) => setName(e.target.value)}/><br></br><br></br>
      <input type="text" value={email} placeholder="Email id" onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <input type="text" value={usn} placeholder="Usn" onChange={(e) => setUsn(e.target.value)}/><br></br><br></br>
      <input type="text" value={phoneno} placeholder="Phoneno" onChange={(e) => setPhoneno(e.target.value)}/><br></br><br></br>
      <input type="text" value={branch} placeholder="Branch" onChange={(e) => setBranch(e.target.value)}/><br></br><br></br>
      <button type="submit" style={{ color: "yellow", backgroundColor:"green"}}>Submit</button>
  <p>{name}</p>
  <p>{email}</p>
  <p>{usn}</p>
  <p>{phoneno}</p>
  <p>{branch}</p>
  </form>
  </div>
  )
}

export default Form