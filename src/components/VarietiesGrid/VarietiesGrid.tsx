import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './VarietiesGrid.module.css';

type Variety = { name: string; origin: string; img: string };

const varieties: Variety[] = [
  { name: 'Deglet Nour', origin: 'Classic Caramel Sweetness', img: '/images/1.png' },
  { name: 'Medjool', origin: 'Jumbo Soft & Rich', img: '/images/3.png' },
  { name: 'Halawi', origin: 'Honeyed Flavor Burst', img: '/images/4.png' },
  { name: 'Barhi', origin: 'Creamy & Delicate', img: '/images/5.png' },
  { name: 'Khidri', origin: 'Chewy Coffee Notes', img: '/images/6.jpeg' },
  { name: 'Zahidi', origin: 'Nutty Light Sweetness', img: '/images/7.jpeg' },
  { name: 'Ajwa', origin: 'Dark, Soft & Sacred', img: '/images/8.jpeg' },
  { name: 'Sukkary', origin: 'Golden Crunchy Sweet', img: '/images/9.jpeg' },
  { name: 'Safawi', origin: 'Intense Caramel Notes', img: '/images/10.jpeg' }
];

const chunk = (arr: Variety[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const AUTO = 6000;

const VarietiesGrid: React.FC = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Responsive items per slide
  const cols = typeof window !== 'undefined' && window.innerWidth < 700 ? 2 : 3;
  const slides = useMemo(() => chunk(varieties, cols), [cols]);

  const next = () => setIndex(i => (i + 1) % slides.length);
  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, AUTO);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section id="varieties" className={styles.section}>
      <div className={styles.header}>      
        <h2>Explore Varieties</h2>
        <p>Hand-selected premium cultivars to suit every palate.</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }} ref={containerRef}>
          {slides.map((group, gi) => (
            <div className={styles.slide} key={gi}>
              {group.map(v => (
                <div key={v.name} className={styles.card}>                  
                  <div className={styles.imageWrap}>
                    <img src={v.img} alt={v.name} />
                  </div>
                  <h3>{v.name}</h3>
                  <p>{v.origin}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.controls}>
          <button aria-label="Previous varieties" onClick={prev}>‹</button>
          <button aria-label="Next varieties" onClick={next}>›</button>
        </div>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i+1}`} data-active={i===index} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarietiesGrid;
