import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import Modal from "components/Modal/Modal.js";
import React, { useState } from 'react';

export default class AdminNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

render() {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {this.props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
          <button
            className="btn btn-primary rounded-pill"
            type="button"
            onClick={this.openModal}
          >
          Connect Wallet
          </button>
          </Nav>
        </Container>
      </Navbar>
      <Modal
        show={this.state.showModal}
        close={this.closeModal}>
      </Modal>
    </>
  );
};
}
