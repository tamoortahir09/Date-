import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

// Simple count-up hook
const useCountUp = (end: number, duration = 1600, formatter?: (v: number) => string) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return formatter ? formatter(value) : value.toString();
};

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>        
        <p className={styles.tag}>Fresh • Pure • Natural</p>
        <h1>Elevate Energy with <span>Degla Tounsiya</span> Dates</h1>
        <p className={styles.lead}>Experience the caramel sweetness and silky texture of premium Deglet Nour dates sourced responsibly from sun‑kissed Tunisian oases.</p>
        <div className={styles.actions}>          
          <button className={styles.primary}>Shop Premium Box</button>
          <button className={styles.secondary}>Learn More</button>
        </div>
        <div className={styles.stats}>          
          <div className={styles.stat}>            
            <strong>{useCountUp(10000, 1400, v => v >= 10000 ? '10K+' : v >= 1000 ? (v/1000).toFixed(1)+'K' : v.toString())}</strong>
            <span>Happy Customers</span>
          </div>
          <div className={styles.stat}>            
            <strong>{useCountUp(48)}</strong>
            <span>Fresh Dispatch</span>
          </div>
            <div className={styles.stat}>            
            <strong>{useCountUp(100)}%</strong>
            <span>Natural</span>
          </div>
        </div>
      </div>
      <div className={styles.visual}>        
        <div className={styles.circle} />
        <img src="/images/2.png" alt="Premium Deglet Nour dates" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
