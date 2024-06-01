"use client"

import services from "@/app/TempData/services.js";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";

export default function ServicesCards() {
    return (
        <Container>
            <Row>
                {services.map(elem => (
                    <Col key={elem.id} lg={4} sm={12} className="d-flex justify-content-center">
                        <ServicesCard name={elem.name}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
