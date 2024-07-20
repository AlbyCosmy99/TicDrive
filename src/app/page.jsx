import ServicesCards from "./components/ui/layout/ServicesCards/ServicesCards";
import Image from 'next/image'
import topimg from '../app/assets/topimg.jpg'
import styles from './app.module.css'

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Image
        src={topimg}
        width={80}
        height={100}
        alt="TicDrive logo1"
      />
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 className={styles.topText}>Le migliori officine d italia</h2>
        <p>Confronta tutte le proposte del territorio e risparmia</p>
        <div className="d-flex justify-content-around w-100">
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
          <i className="bi bi-amd"></i>
        </div>
      </div>
      <ServicesCards />
      <h4>Quali sono i nostri vantaggi?</h4>
      <div className="d-flex justify-content-around w-100">
          <div>
            <i className="bi bi-amd"></i>
            <h2>Affidabilita'</h2>
          </div>
          <div>
            <i className="bi bi-amd"></i>
            <h2>Sicurezza</h2>
          </div>
          <div>
            <i className="bi bi-amd"></i>
            <h2>Velocita'</h2>
          </div>
      </div>
    </div>
  );
}
