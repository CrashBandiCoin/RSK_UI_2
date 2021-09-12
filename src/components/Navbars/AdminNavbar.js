import {Link} from "react-router-dom";
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
import ModalWallet from "components/Modal/ModalWallet.js";
import ModalBlockChain from "components/Modal/ModalBlockChain.js";
import React, {useState} from 'react';

export default class AdminNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showModalWallet: false,
            showModalBc: false
        }
    }

    openModalWallet = () => {
        this.setState({
            showModalWallet: true
        });

    }

    openModalBc = () => {
        this.setState({
            showModalBc: true
        });

    }

    closeModalWallet = () => {
        this.setState({
            showModalWallet: false
        });
    }

    closeModalBc = () => {
        this.setState({
            showModalBc: false
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
                                onClick={this.openModalBc}
                                disabled={this.state.showModalWallet}

                            >
                                Choose blockchain
                            </button>

                            <button
                                className="btn btn-primary rounded-pill"
                                type="button"
                                onClick={this.openModalWallet}
                                disabled={this.state.showModalBc}
                            >
                                Connect Wallet
                            </button>
                        </Nav>
                    </Container>
                </Navbar>
                <ModalWallet show={this.state.showModalWallet} close={this.closeModalWallet} />
                <ModalBlockChain show={this.state.showModalBc} close={this.closeModalBc} />
            </>
        );
    };
}
