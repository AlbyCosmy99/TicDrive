import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './ServiceCard.module.css'
import './localVariables.css'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServicesCard({ name }) {
  return (
    <Card className={`${styles.customCard} position-relative`}>
      <Card.Img variant="top" src="https://s3.ecompletocarros.dev/images/lojas/285/veiculos/172265/veiculoInfoVeiculoImagesMobile/vehicle_image_1702422910_d41d8cd98f00b204e9800998ecf8427e.jpeg" />
      <Card.Body className={`${styles.customTextCard} position-absolute d-flex flex-column justify-content-center w-100 bottom-0 p-0 bg-white text-center bg-red`}>
        <Card.Title className={`fs-6 ${styles.innerCardText}`}>{name.toUpperCase()}</Card.Title>
        <Button style={{color: '#06BD66'}} className={`${styles.innerCardText}`}>Prenota ora <FaLongArrowAltRight style={{display:'inline-block'}}/></Button>
      </Card.Body>
    </Card>
    
  );
}
