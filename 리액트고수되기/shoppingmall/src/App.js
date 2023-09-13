/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png'
import {a, b} from './data.js'
import data from './data.js' // import 꼭 해줘야함
import { useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  console.log(shoes);

  return (
    <div className="App">
    <>
    <br/>
    <Navi/>
    <Link to ="/">Home</Link> or 
    <Link to ="detail">Detail</Link>
    <Routes>
      <Route path="/" element={
      <> 
        <div>메인페이지임</div>
        <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}> </div>
      <Container>
      <Row>
        {
          shoes.map((a, i)=>{
            return(
              <Card shoes ={shoes[i]} i={i+1}></Card>
            )
          })
        }
      </Row>
      </Container>
      </>
      }/>
      <Route path= "/detail" element={<div>상세페이지임</div>}/>
      <Route path="/about" element={<div>어바웃페이지임</div>}/>
    </Routes>
    
    </>
    </div>
  );
}

function Navi(){
  return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">호연마켓</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Cart</Nav.Link>
        </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
    </Navbar>
  );
}

function Card(props){
  return(
    <Col sm>
      <img src = {'https://lovesykkkk.github.io/shoes' + props.i + '.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </Col>
  );
}

export default App;
