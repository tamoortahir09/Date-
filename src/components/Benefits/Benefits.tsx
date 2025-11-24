import React from 'react';
import styles from './Benefits.module.css';

const items = [
  { title: 'Natural Energy', text: 'Slow-release carbohydrates keep you powered longer.' },
  { title: 'Rich in Fiber', text: 'Supports digestion & balanced wellness.' },
  { title: 'Clean Sourcing', text: 'Hand-picked & sun-dried with minimal handling.' },
  { title: 'Mineral Dense', text: 'Potassium, magnesium & iron for daily vitality.' }
];

const Benefits: React.FC = () => (
  <section id="benefits" className={styles.section}>
    <h2 className={styles.title}>Why Choose Our Dates?</h2>
    <div className={styles.grid}>      
      {items.map(i => (
        <div key={i.title} className={styles.item}>          
          <h3>{i.title}</h3>
          <p>{i.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
