/*eslint-disabled*/
import './App.css';
import { Navbar, Nav, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Route, Routes, Link} from 'react-router-dom';
import { useState } from 'react';
import data from './data.js'

function App() {
  const [cats] = useState(data);
  console.log(cats);

  return (
    <div className="App">
    <Navi/>
    <Routes>
      <Route path="/" element={
        <> 
          <div className='main-bg'> </div>
          <br/>
          <Container>
            <Row>
              {
                cats.map((a, i)=>{
                  return(
                    <Card cats ={cats[i]} i={i+1}></Card>
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
    </div>
  );
}

function Navi(){
  return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand  className='navCat' href="/">고친소</Navbar.Brand>
      <br/><br/><br/><br/>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/qna">Q&A</Nav.Link>
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
      <img src = {'https://howooyeon.github.io/cats' + props.i + '.jpg'} width="150px" height="160px"/>
      <h4>{props.cats.title}</h4>
      <p>{props.cats.content}</p>
    </Col>
  );
}

export default App;
