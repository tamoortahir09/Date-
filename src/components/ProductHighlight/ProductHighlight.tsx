import React from 'react';
import styles from './ProductHighlight.module.css';

const ProductHighlight: React.FC = () => {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.headline}>        
        <h2>Fresh Picks</h2>
        <a href="#varieties" className={styles.link}>See All →</a>
      </div>
      <div className={styles.grid}>        
        {[
          { name: 'Deglet Nour', price: '$8.50', img: '/images/1.png' },
          { name: 'Medjool Deluxe', price: '$11.90', img: '/images/3.png' },
          { name: 'Organic Sun-Dried', price: '$9.25', img: '/images/4.png' }
        ].map(card => (
          <article key={card.name} className={styles.card}>            
            <div className={styles.imageWrap}>
              <img src={card.img} alt={card.name} />
            </div>
            <div className={styles.info}>              
              <h3>{card.name}</h3>
              <p className={styles.price}>{card.price}/250g</p>
              <button>Add to Cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlight;
