import React, { useState } from "react";

function Login() {
  //define state values for the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //define state values for the response message
  const [responseMessage, setResponseMessage] = useState("");
  //write the function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //prepare the the data to be sent to the server
    const loginData = {
      email: email,
      password: password,
    };
    //check the data in the console
    console.log(loginData);
    //send the employee object to the server
    const apiURL = "http://3.131.133.10:4000/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };

    //set the response message
    const response = fetch(apiURL, requestOptions);
    response
      .then((res) => res.json())
      .then((res) => setResponseMessage(res.message));
    if (loginData.status === "success") {
      //redirect to the home page
      // history.push('/')
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}

export default Login;
