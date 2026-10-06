import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useReveal } from '../hooks/useReveal';
import { menuCategories, whatsappLink } from '../data';
import { useCart } from '../context/CartContext';
import './pages.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const headerRef = useReveal();
  const { addToCart } = useCart();

  const categories = [{ id: 'all', label: 'All' }, ...menuCategories];

  const visibleCategories =
    activeCategory === 'all'
      ? menuCategories
      : menuCategories.filter((cat) => cat.id === activeCategory);

  return (
    <>
      <PageHeader
        label="Full Menu"
        title="Our Menu"
        subtitle="Browse our complete selection — from starters to desserts. Every dish is prepared fresh to order."
        image="https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
        imageAlt="Luxurious gourmet meal elegantly plated with vegetables and sauce."
      />

      <section className="section menu-page">
        <div className="container">
          <div className="menu-page__tabs" ref={headerRef} role="tablist" aria-label="Menu categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`menu-page__tab ${activeCategory === cat.id ? 'menu-page__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {visibleCategories.map((category) => (
            <div className="menu-page__category" key={category.id}>
              <h2 className="menu-page__category-title">{category.label}</h2>
              <div className="menu-page__grid">
                {category.dishes.map((dish) => (
                  <article className="menu-page__card" key={dish.id}>
                    <div className="menu-page__card-image">
                      <img src={dish.image} alt={dish.alt} loading="lazy" />
                    </div>
                    <div className="menu-page__card-body">
                      <div className="menu-page__card-header">
                        <h3 className="menu-page__card-name">{dish.name}</h3>
                        <span className="menu-page__card-price">{dish.price}</span>
                      </div>
                      <p className="menu-page__card-desc">{dish.description}</p>
                      <div className="menu-page__card-actions">
                        <button
                          className="menu-page__add"
                          onClick={() => addToCart(dish)}
                          aria-label={`Add ${dish.name} to cart`}
                        >
                          <ShoppingBag size={16} /> Add to Order
                        </button>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="menu-page__order"
                          aria-label={`Order ${dish.name} on WhatsApp`}
                        >
                          Order
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
