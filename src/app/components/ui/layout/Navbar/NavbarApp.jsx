import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { useState } from "react";
import AuthContext from "@/app/Contexts/AuthContext";
import LoginDialog from "../LoginDialog/LoginDialog";

export default function NavbarApp() {
    const [isLoginDialog, setIsLoginDialog] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoginDialog, setIsLoginDialog }}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">TIC DRIVE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex gap-3">
                            <Button onClick={() => setIsLoginDialog(true)}>Login</Button>
                            <Button>REGISTRATI ORA</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isLoginDialog && <LoginDialog />}
        </AuthContext.Provider>
    );
}
