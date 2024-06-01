"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarApp from './components/ui/layout/Navbar/NavbarApp';
import styles from './app.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column`}>
        <div className={styles.appContent}>
          <header>
            <NavbarApp />
          </header>
          <span className={styles.appMain}>
            {children}
          </span>
        </div>
        <footer>FOOTER</footer>
        </body>
    </html>
  );
}
