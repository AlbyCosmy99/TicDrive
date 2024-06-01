"use client"

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import AuthContext from "@/app/components/ui/contexts/AuthContext";
import LoginDialog from "../LoginDialog/LoginDialog";
import Image from 'next/image'
import logo from '../../../../assets/ticDriveLogo.jpeg'

export default function NavbarApp() {
    const [isLoginDialog, setIsLoginDialog] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoginDialog, setIsLoginDialog }}>
            <Navbar expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand href="/">
                    <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt="TicDrive logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex gap-3">
                            <Button variant="success" onClick={() => setIsLoginDialog(true)}>Login</Button>
                            <Button variant="success" onClick={() => setIsLoginDialog(true)}>REGISTRATI ORA</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isLoginDialog && <LoginDialog />}
        </AuthContext.Provider>
    );
}
