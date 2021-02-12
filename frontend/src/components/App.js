import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const axios = require("axios");

function MyLogin() {
    const [state, setState] = useState({
        username: null,
        password: null,
        verified: false,
    });
    const handleChange = (e) => {
        var val = null;
        if (e.target.value !== "") val = e.target.value;
        setState({ ...state, [e.target.id]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", state).then((response) => {
            console.log(response.data.is_valid);
            if (response.data.is_valid) setState({ ...state, verified: true });
        });
    };

    return (
        <Container>
            {state.verified && <Alert variant="success">Logged In!</Alert>}
            <h1>{state.username + " " + state.password}</h1>
            <Form onChange={handleChange} onSubmit={handleSubmit} inline>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyLogin />
            </header>
        </div>
    );
}

/*import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Quotes />
            </header>
        </div>
    );
}*/

export default App;
