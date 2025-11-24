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
  const stats = [
    { label: 'Happy Customers', value: useCountUp(10000, 1400, v => (v >= 10000 ? '10K+' : v >= 1000 ? `${(v / 1000).toFixed(1)}K` : `${v}`)) },
    { label: 'Fresh Dispatch', value: `${useCountUp(48)}H` },
    { label: 'Natural', value: `${useCountUp(100)}%` }
  ];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.board}>
        <div className={styles.inner}>
          <div className={styles.copy}>            
            <span className={styles.badge}>100% Pure Natural</span>
            <h1>Your Daily Dose of <span className={styles.highlight}>Fresh Dates</span></h1>
            <p className={styles.lead}>Silky caramel sweetness, layered texture, and nutrient-rich fuel for every ritual. Curated from Tunisian oases, packed within 48h.</p>
            <div className={styles.actions}>              
              <button className={styles.primary}>Shop Now</button>
              <button className={styles.secondary}>Learn More</button>
            </div>
            <div className={styles.stats}>              
              {stats.map(stat => (
                <div key={stat.label} className={styles.stat}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.heroArt}>
              <img src="/images/1.png" alt="Premium Degla Tounsiya dates" />
              <div className={styles.floatingCard}>
                <img src="/images/3.png" alt="Medjool" />
                <div>
                  <p>Medjool Deluxe</p>
                  <span>1kg • $12</span>
                </div>
                <button>Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
