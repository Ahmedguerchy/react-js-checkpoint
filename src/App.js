import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">AG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact us">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br/>
    <body>
 <p> Welcome to my website </p>
 <span>if you want to join us just sign up</span>
 <Form>
 <Form.Group className="mb-3">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Label>Gender</Form.Label>
      <Form.Select >
      
      <option>Male</option>
      <option>Female</option>
        </Form.Select>
        <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    </body>
    </div>
  );
}

export default App;
