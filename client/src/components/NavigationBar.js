import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
.navbar {
    background-color: grey;
}

.navbar-brand, navbar-nav .nav-link {
    color: black;

}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/"> OneNUS </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = 'ml-auto'>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/nushappenings">NUShappenings</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/food">Food</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)