import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div className="d-flex justify-content-center border border-bottom-1">
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <Navbar className="col-11" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <h3>
              <span className="fw-bold text-primary">Social</span>
              <span className="fw-light text-gray">Network</span>
            </h3>
          </Navbar.Brand>
          <Form className="col-5 d-flex border border-1">
            <FormControl
              type="search"
              placeholder="Find"
              className="me-2 border-0 bg-transparent"
              aria-label="Search"
            />
            <Button className="bg-transparent border-0 pb-0 align-items-center">
              <span className="material-icons text-primary">search</span>
            </Button>
          </Form>
          <button className="buttonUpload bg-primary rounded border-0 px-3 py-2">
            <span className="material-icons me-2">arrow_upward</span>
            <span>Upload</span>
          </button>
          <div className="userSection d-flex align-items-center text-end">
            <div className="userProfile text-center bg-primary rounded-circle me-3">
              <span className="material-icons text-white">person</span>
            </div>
            <div className="userName text-start">
              <p className="mb-0 fw-bold text-gray">Waseemmmmmm</p>
              <p className="mb-0 text-gray">Arshanmmmmm</p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
