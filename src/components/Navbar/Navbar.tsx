import React, { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Service', href: '#benefits' },
  { label: 'Shop', href: '#varieties' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#home">
          <span className={styles.logoDot}>DT</span>
          <div>
            <strong>Degla</strong>
            <small>Tounsiya</small>
          </div>
        </a>
        <button aria-label="Toggle menu" className={styles.burger} onClick={() => setOpen(o => !o)}>
          <span />
          <span />
          <span />
        </button>
        <nav className={styles.nav} data-open={open}>
          {links.map(link => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <div className={styles.mobileActions}>
            <button className={styles.login}>Login</button>
            <button className={styles.cta}>Shop Now</button>
          </div>
        </nav>
        <div className={styles.actions}>
          <button className={styles.login}>Login</button>
          <button className={styles.cta}>Shop Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
