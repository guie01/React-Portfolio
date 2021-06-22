import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Guillermo Garcia</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="mailto:guillegarcia0107@gmail.com">Contact Me</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigationbar