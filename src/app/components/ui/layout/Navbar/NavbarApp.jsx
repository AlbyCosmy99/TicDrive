"use client"

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import AuthContext from "@/app/components/ui/contexts/AuthContext";
import LoginDialog from "../LoginDialog/LoginDialog";
import Image from 'next/image'
import logo from '../../../../assets/ticDriveLogo.jpeg'
import styles from './navbar.module.css'

export default function NavbarApp() {
    const [isLoginDialog, setIsLoginDialog] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoginDialog, setIsLoginDialog }}>
            <Navbar expand="lg" className={styles.backgroundColor}>
                <Container>
                    <Navbar.Brand href="/">
                    <Image
                        src={logo}
                        width={60}
                        height={60}
                        alt="TicDrive logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex gap-3">
                            <Button className={styles.navbarButton} onClick={() => setIsLoginDialog(true)}>Servizi</Button>
                            <Button className={styles.navbarButton} onClick={() => setIsLoginDialog(true)}>Mappa</Button>
                            <Button variant="success" onClick={() => setIsLoginDialog(true)}>Login</Button>
                            <Button variant="success" onClick={() => setIsLoginDialog(true)}>Registrati ora</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isLoginDialog && <LoginDialog />}
        </AuthContext.Provider>
    );
}
