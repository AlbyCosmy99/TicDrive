import ServicesCards from "./components/ui/layout/ServicesCards/ServicesCards";
import Image from 'next/image'
import topimg from '../app/assets/topimg.jpg'
import styles from './app.module.css'

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-2">
      <div style={{ width: '60%' }} className="mb-3 w-60">
        <Image
          src={topimg}
          layout="responsive"
          width={100}
          height={40} 
          alt="TicDrive logo1"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 className={`${styles.topText} text-center`} style={{fontSize:'1.8rem'}}>Le migliori officine d italia</h2>
        <p className={`text-center`}>Confronta tutte le proposte del territorio e risparmia!</p>
        <div className="d-flex justify-content-around w-100" style={{marginBottom:'1rem', marginTop:'1rem'}}>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
        </div>
      </div>
      <b className="fs-4">Scopri i nostri servizi</b>
      <ServicesCards />
      <h4 className="mt-5 mb-4 fs-5 fw-bold">Quali sono i nostri vantaggi?</h4>
      <div className="d-flex justify-content-around w-100 fs-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-amd"></i>
            <b className="mt-1">Affidabilita&apos;</b>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-amd"></i>
            <b className="mt-1">Sicurezza</b>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-amd"></i>
            <b className="mt-1">Velocita&apos;</b>
          </div>
      </div>
    </div>
  );
}
