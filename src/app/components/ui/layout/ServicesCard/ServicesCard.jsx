import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './ServiceCard.module.css'

export default function ServicesCard({ name }) {
  return (
    <Card className={styles.customCard}>
      <Card.Img variant="top" src="https://s3.ecompletocarros.dev/images/lojas/285/veiculos/172265/veiculoInfoVeiculoImagesMobile/vehicle_image_1702422910_d41d8cd98f00b204e9800998ecf8427e.jpeg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary">Prenota ora</Button>
      </Card.Body>
    </Card>
    
  );
}
