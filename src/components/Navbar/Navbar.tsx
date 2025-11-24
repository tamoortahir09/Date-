import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>        
        <div className={styles.brand}>Degla<span>Tounsiya</span></div>
        <nav className={styles.nav} data-open={open}>
          <a href="#menu">Menu</a>
          <a href="#benefits">Benefits</a>
          <a href="#varieties">Varieties</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className={styles.actions}>          
          <button className={styles.cta}>Shop Now</button>
          <button aria-label="Toggle menu" className={styles.burger} onClick={() => setOpen(o => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
