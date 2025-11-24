import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer} id="contact">
    <div className={styles.top}>      
      <div className={styles.brand}>Degla<span>Tounsiya</span></div>
      <nav className={styles.links}>        
        <strong>Explore</strong>
        <a href="#home">Home</a>
        <a href="#benefits">Benefits</a>
        <a href="#varieties">Varieties</a>
        <a href="#contact">Contact</a>
      </nav>
      <nav className={styles.links}>        
        <strong>Company</strong>
        <a href="#about">About</a>
        <a href="#sourcing">Sourcing</a>
        <a href="#care">Care & Storage</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className={styles.newsletter}>        
        <strong>Get updates</strong>
        <p>Harvest notes, limited drops, and seasonal recipes.</p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.social}>
        <a href="#" aria-label="Instagram" className={styles.iconBtn}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" className={styles.iconBtn}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M23 5.93c-.82.37-1.7.61-2.63.72a4.6 4.6 0 0 0 2.02-2.52 9.2 9.2 0 0 1-2.92 1.13A4.58 4.58 0 0 0 12 9.54c0 .36.04.71.12 1.05A13 13 0 0 1 2.23 4.6a4.57 4.57 0 0 0 1.42 6.11 4.52 4.52 0 0 1-2.07-.57v.06a4.58 4.58 0 0 0 3.66 4.49 4.6 4.6 0 0 1-2.06.08 4.58 4.58 0 0 0 4.28 3.18A9.18 9.18 0 0 1 1 20.41 12.94 12.94 0 0 0 8.03 22c8.32 0 12.87-6.9 12.87-12.88 0-.2 0-.41-.01-.61A9.17 9.17 0 0 0 23 5.93Z" />
          </svg>
        </a>
        <a href="#" aria-label="Facebook" className={styles.iconBtn}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.483v-9.294H9.847V11.01h2.961V8.414c0-2.932 1.792-4.533 4.411-4.533 1.253 0 2.335.093 2.649.135v3.07h-1.818c-1.426 0-1.702.678-1.702 1.673v2.251h3.402l-.444 3.696h-2.958V24h5.799C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0Z" />
          </svg>
        </a>
      </div>
    </div>
    <div className={styles.bottom}>      
      <small>© {new Date().getFullYear()} Degla Tounsiya. All rights reserved.</small>
      <small>Crafted with care & sustainable vision.</small>
    </div>
  </footer>
);

export default Footer;
