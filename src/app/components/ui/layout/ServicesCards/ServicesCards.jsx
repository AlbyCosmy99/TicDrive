"use client";

import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
    const [services, setServices] = useState([]);

    async function fetchServices() {
        try {
            const res = await fetch("https://669ae4f09ba098ed610102d8.mockapi.io/api/v1/ticDrive/services");
            if (!res.ok) {
                throw new Error('Failed to fetch services');
            }
            const data = await res.json();
            setServices(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <Container>
            <Row>
                {services.map((elem) => (
                    <Col key={elem.id} lg={4} sm={12} className="d-flex justify-content-center">
                        <ServicesCard name={elem.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
