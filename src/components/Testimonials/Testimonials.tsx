import React, { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';

type T = { quote: string; name: string; location: string; avatar: string };
const data: T[] = [
  { name: 'Amira', quote: 'Unmatched natural sweetness. Perfect pre‑workout boost!', location: 'Paris', avatar: '/images/1.png' },
  { name: 'Youssef', quote: 'Texture and flavor remind me of oasis trips.', location: 'Dubai', avatar: '/images/3.png' },
  { name: 'Layla', quote: 'So fresh & soft — arrived in beautiful sustainable packaging.', location: 'London', avatar: '/images/4.png' }
];

const INTERVAL = 6500;

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(i => (i + 1) % data.length);
  const prev = () => setIndex(i => (i - 1 + data.length) % data.length);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>        
        <h2>Loved by Date Enthusiasts</h2>
      </div>
      <div className={styles.slider}>        
        {data.map((t, i) => (
          <article key={t.name} className={styles.slide} data-active={i === index}>            
            <img className={styles.avatar} src={t.avatar} alt="" />
            <p className={styles.quote}>“{t.quote}”</p>
            <h3>{t.name}</h3>
            <span className={styles.location}>{t.location}</span>
          </article>
        ))}
        <div className={styles.controls}>          
          <button onClick={prev} aria-label="Previous testimonial">‹</button>
          <button onClick={next} aria-label="Next testimonial">›</button>
        </div>
        <div className={styles.dots}>
          {data.map((_, i) => (
            <button key={i} data-active={i===index} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
