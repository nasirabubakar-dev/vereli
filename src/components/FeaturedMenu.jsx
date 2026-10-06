import { useReveal } from '../hooks/useReveal';
import { featuredDishes, whatsappLink } from '../data';
import './FeaturedMenu.css';

export default function FeaturedMenu() {
  const headerRef = useReveal();

  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="featured__header" ref={headerRef}>
          <span className="section-label">Featured Dishes</span>
          <h2 className="section-title">A taste of what we do best</h2>
          <p className="section-subtitle">
            Each dish is prepared with care, using quality ingredients and recipes inspired by flavors from across the globe.
          </p>
        </div>

        <div className="featured__grid">
          {featuredDishes.map((dish) => (
            <FeaturedCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ dish }) {
  const ref = useReveal();

  return (
    <article className="dish-card" ref={ref}>
      <div className="dish-card__image-wrapper">
        <img src={dish.image} alt={dish.alt} className="dish-card__image" loading="lazy" />
      </div>
      <div className="dish-card__body">
        <div className="dish-card__header">
          <h3 className="dish-card__name">{dish.name}</h3>
          <span className="dish-card__price">{dish.price}</span>
        </div>
        <p className="dish-card__desc">{dish.description}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="dish-card__order"
          aria-label={`Order ${dish.name}`}
        >
          Order
        </a>
      </div>
    </article>
  );
}
