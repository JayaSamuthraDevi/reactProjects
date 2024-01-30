import { useState } from 'react'
function App() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile_no,setMobile_no] = useState("");
  const [dob,setDob] = useState("");
  const [address,setAddress] = useState(""); 
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/register',
      {
        method: "post",
        body: JSON.stringify({email ,firstname,lastname,mobile_no,dob,address}),
        headers:
        {
          'Content-Type': 'application/json'
        }
      })
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setFirstname("");
      setLastname("");
      setMobile_no("");
      setDob("");
      setAddress("");
    }
  }
  return (
    <>
      <h1>This is React WebApp </h1>
      <form action="">
        
        <input type="email" placeholder="email" 
          value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="firstname" 
          value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          <input type="text" placeholder="lastname" maxLength={10}
          value={lastname} onChange={(e) => setLastname(e.target.value)} />
          <input type="number" placeholder="name"
          value={mobile_no} onChange={(e) => setMobile_no(e.target.value)} />
          <input type="date" placeholder="dd-mm-yyyy"
          value={dob} onChange={(e) => setDob(e.target.value)} />
          <textarea placeholder="address" maxLength={50}
          value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit"
          onClick={handleOnSubmit}>submit</button>
      </form>

    </>
  );
  
}

export default App;