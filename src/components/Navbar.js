import React from 'react';
import { useState } from 'react';
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import Offcanvas from './Offcanvas';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex bg-white justify-content-center border border-bottom-2  sticky-top">
      <Navbar className="col-sm-11">
        <div className="container mx-0">
          <Navbar.Brand href="#">
            <h3>
              <span className="fw-bold text-primary">Social</span>
              <span className="fw-light text-gray">Network</span>
            </h3>
          </Navbar.Brand>
          <Form className="formSearch col-5 border border-1">
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
          <div className="userSection align-items-center ">
            <div className="userProfile align-items-center bg-primary rounded-circle me-3">
              <span className="material-icons text-white mx-auto">person</span>
            </div>
            <div className="userName text-start">
              <p className="mb-0 fw-bold text-gray">Waseem</p>
              <p className="mb-0 text-gray">Arshan</p>
            </div>
          </div>
          <button className="menuButton border-0 bg-transparent">
            <span className="material-icons" onClick={handleShow}>
              menu
            </span>
          </button>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <span className="fw-bold text-primary">Social</span>Network
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="userSection d-flex align-items-center text-end">
              <div className="userProfile d-flex align-items-center bg-primary rounded-circle me-3">
                <span className="material-icons text-white mx-auto">
                  person
                </span>
              </div>
              <div className="userName text-start">
                <p className="mb-0 fw-bold text-gray">Waseem</p>
                <p className="mb-0 text-gray">Arshan</p>
              </div>
            </div>
            <button className="buttonUpload bg-primary rounded border-0 px-3 py-2 mt-3">
              <span className="material-icons me-2">arrow_upward</span>
              <span>Upload</span>
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
