import React from "react";
import { useState } from "react";
// import { Form } from 'react-router-dom'

function AddEmployee() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //prepare the data to be sent to the server
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    //send the data to the server
    const apiURL = "http://3.17.204.185:4000/addemployee";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = fetch(apiURL, requestOptions);
    response.then((res) => res.json()).then((res) => console.log(res));
  };

  //define state values for the form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="add">
        <h1>AddEmployee</h1>

        <form onSubmit={handleSubmit} className="App-header">
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default AddEmployee;
