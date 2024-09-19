import { useEffect, useState } from 'react';
import './App.css';
import './outerlayout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import OuterLayout from './OuterLayout';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import BasicExample from './OuterLayout';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
let[finalCategory,setFinalCategory]=useState([]);
let[finalProduct,setFinalProduct]=useState([]);
let[catname,setCatname]=useState("");

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
.then((res) => res.data)
.then((finalRes)=>{
  setFinalCategory(finalRes)
});
  }
let getProducts=()=>{
  axios.get('https://dummyjson.com/products')
  .then((res) => res.data)
.then((finalRes)=>{
  setFinalProduct(finalRes.products)
});
}

  useEffect(()=>{
    getCategory();
    getProducts();
  },[])

  useEffect(()=>{
if(catname!==""){
  axios.get(`https://dummyjson.com/products/category/${catname}`)
  .then((res) => res.data)
.then((finalRes)=>{
  setFinalProduct(finalRes.products)
});
}
  },[catname])

let productItems=finalProduct.map((product,index)=>{
  return(
<BasicExample key={index} pdata={product}/>)
})


  return (
    <div className='App'>
      < NavScrollExample />
      <h1>Welcome to the Fashion World </h1>
      <div className='outerlayout'>
  <OuterLayout finalCategory={finalCategory} setCatname={setCatname}/>
  <div className='products'>
          <h2>Products</h2>
          <div className='cards'>
            {finalProduct.length>0?productItems:"no product found"}
          </div>
        </div>
  </div>
  </div>
  )
}
function BasicExample({pdata}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pdata.thumbnail} />
      <Card.Body>
        <Card.Title>{pdata.title}</Card.Title>
        <Card.Text>
          {pdata.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default App;
