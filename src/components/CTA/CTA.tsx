import React from 'react';
import styles from './CTA.module.css';

const CTA: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.box}>      
      <h2>Get 15% Off Your First Artisan Box</h2>
      <p>Join the Degla insiders list for harvest news & early access drops.</p>
      <form className={styles.form} onSubmit={e => e.preventDefault()}>        
        <input type="email" placeholder="Email address" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>
);

export default CTA;
