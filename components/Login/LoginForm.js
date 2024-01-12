
import React, { useState } from "react";
import {  getUser,getEmail } from "../../utils/Queries";
import { useSession, signIn, signOut } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEye,
  faEyeSlash,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Form, Col, InputGroup, Button, Alert } from "react-bootstrap";


const RegisterForm = (props) => {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [data, setData] = useState({ username: '', password: ''})

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const togglePassword = (e) => {
      if(inputType == "password") { setInputType("input")}
      if(inputType == "input") { setInputType("password")}
  }

  const clearError = async (e) => {
    setErr("");

  }

  const submitPost = async (values) => {
    setErr("");

    const url = "/api/auth/login";

    try {
      const response = await fetch(url, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      // if (response.status === 200) {

      if (response.ok) {
        window.location.href = "/dashboard"
      }

      //   signIn("credentials", { username: values.username, password: values.password });
        
      //   //   const { token } = await response.json();
      //   //   await login({ token });
      // } else {
     //   console.log("Login failed.");
        
        // https://github.com/developit/unfetch#caveats
     //   let error = new Error(response.statusText);
     //   error.response = response;
     ////   setErr(error);
     //   throw error;
   //   }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );

      const { response } = error;
      setErr(response ? response.statusText : error.message);
    }

  };

  return (

        <div className="accwrap">
          <Form noValidate onSubmit={submitPost} onClick={clearError}>
            <h1 className="accounthead">Login</h1>
            <p className="mb-20">
              Log in 
            </p>
            <hr />
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="enter a username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
              
                  />

                  <Form.Control.Feedback type="invalid">
                    {/* {errors.username} */}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupWebsite">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type={inputType}
                    placeholder="enter a password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
            
                  />
                  <InputGroup.Append>
                  {inputType == "password" ?<Button variant="light" className="showbutton" onClick={togglePassword}><FontAwesomeIcon icon={faEye} /></Button> :
                  <Button variant="light" className="showbutton" onClick={togglePassword}><FontAwesomeIcon icon={faEyeSlash} /></Button> }
                    {/* <InputGroup.Text id="basic-addon2">e</InputGroup.Text> */}
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    {/* {errors.password} */}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            {done && (
              <Alert variant="success" className="done">
                Done!
              </Alert>
            )}

            {err && (
              <Alert variant="danger" className="done">
                An Error has occured!
              </Alert>
            )}

          </Form>

          
          <Button className="default-btn" onClick={submitPost}>
              Login
            </Button>
        </div>

  );
};

export default RegisterForm;
