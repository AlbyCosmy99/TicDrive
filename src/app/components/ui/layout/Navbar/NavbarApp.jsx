import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';

export default function NavbarApp() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">TIC DRIVE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex gap-3">
                        <Link href="/login">LOGIN</Link>
                        <Link href="/register">REGISTRATI ORA</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
