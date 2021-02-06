import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function MyCard() {
    return (
        <Card border="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../../logo512.png" />
            <Card.Body className="mb-0">
                <Card.Title>This is a CARD</Card.Title>
                <Card.Subtitle>They look useful.</Card.Subtitle>
                <Card.Text>Probably gonna use em</Card.Text>
            </Card.Body>
        </Card>
    );
}

function MyAlert() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert
                variant="success"
                style={{ width: "18rem" }}
                onClose={() => setShow(false)}
                dismissible
            >
                <Alert.Heading>This is an Alert</Alert.Heading>
                <p className="mb-0">Lorum Ipsum Dolor Ret?</p>
                <hr />
                <p className="mb-0">Non Classy Text</p>
            </Alert>
        );
    }
    return <h1>The ALERT disappeared!!!</h1>;
}

function MyBreadcrumb() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="http://python.org">
                Wanna download python?
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                root (This is a BREADCRUMB)
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

function MyButton() {
    return (
        <Button variant="primary" href="http://python.org">
            This is a BUTTON, it goes to python.org
        </Button>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container fluid="md">
                    <Row>
                        <MyBreadcrumb />
                    </Row>
                    <Row>
                        <MyButton />
                    </Row>
                    <Row>
                        <Col>
                            <MyAlert />
                        </Col>
                        <Col>
                            <MyCard />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
