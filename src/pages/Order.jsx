import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useReveal } from '../hooks/useReveal';
import { menuCategories, whatsappLink, formatNaira } from '../data';
import { useCart } from '../context/CartContext';
import './pages.css';

export default function Order() {
  const ref = useReveal();
  const { items, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();

  const whatsappOrderLink = useMemo(() => {
    if (items.length === 0) return whatsappLink;
    const orderText = items
      .map((item) => `${item.name} x${item.quantity} — ${formatNaira(item.priceValue * item.quantity)}`)
      .join('\n');
    const fullMessage = `Hello VERELI, I would like to place an order:\n\n${orderText}\n\nTotal: ${formatNaira(subtotal)}`;
    return `https://wa.me/2348000000000?text=${encodeURIComponent(fullMessage)}`;
  }, [items, subtotal]);

  return (
    <>
      <PageHeader
        label="Order"
        title="Build your order"
        subtitle="Add dishes to your cart, adjust quantities, and send your order via WhatsApp. This is a demo — no payment is processed."
        image="https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
        imageAlt="Various appetizing dishes served on white plates and glasses of wine on a wooden table in a modern light restaurant."
      />

      <section className="section order-page" ref={ref}>
        <div className="container order-page__layout">
          <div className="order-page__menu">
            {menuCategories.map((category) => (
              <div className="order-page__category" key={category.id}>
                <h2 className="order-page__category-title">{category.label}</h2>
                <div className="order-page__items">
                  {category.dishes.map((dish) => (
                    <article className="order-page__item" key={dish.id}>
                      <div className="order-page__item-image">
                        <img src={dish.image} alt={dish.alt} loading="lazy" />
                      </div>
                      <div className="order-page__item-info">
                        <h3 className="order-page__item-name">{dish.name}</h3>
                        <p className="order-page__item-desc">{dish.description}</p>
                        <span className="order-page__item-price">{dish.price}</span>
                      </div>
                      <button
                        className="order-page__add-btn"
                        onClick={() => addToCart(dish)}
                        aria-label={`Add ${dish.name} to cart`}
                      >
                        <Plus size={18} />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="order-page__cart" aria-label="Order summary">
            <div className="order-page__cart-inner">
              <h2 className="order-page__cart-title">
                <ShoppingBag size={22} strokeWidth={1.5} /> Your Order
                {totalItems > 0 && <span className="order-page__cart-count">{totalItems}</span>}
              </h2>

              {items.length === 0 ? (
                <div className="order-page__cart-empty">
                  <p>Your cart is empty.</p>
                  <p className="order-page__cart-empty-hint">Browse the menu and add dishes to get started.</p>
                </div>
              ) : (
                <>
                  <ul className="order-page__cart-list">
                    {items.map((item) => (
                      <li className="order-page__cart-item" key={item.id}>
                        <div className="order-page__cart-item-info">
                          <span className="order-page__cart-item-name">{item.name}</span>
                          <span className="order-page__cart-item-price">{formatNaira(item.priceValue * item.quantity)}</span>
                        </div>
                        <div className="order-page__cart-item-controls">
                          <button
                            className="order-page__qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="order-page__qty">{item.quantity}</span>
                          <button
                            className="order-page__qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            className="order-page__remove-btn"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="order-page__cart-summary">
                    <div className="order-page__cart-total">
                      <span>Subtotal</span>
                      <span className="order-page__cart-total-value">{formatNaira(subtotal)}</span>
                    </div>
                    <p className="order-page__cart-note">
                      Demo only — no payment is processed. Total does not include delivery or tax.
                    </p>
                  </div>

                  <a
                    href={whatsappOrderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary order-page__checkout"
                  >
                    <MessageCircle size={20} /> Order on WhatsApp
                  </a>
                  <button className="order-page__clear" onClick={clearCart}>
                    Clear cart
                  </button>
                </>
              )}
            </div>
          </aside>
        </div>

        <div className="container order-page__back">
          <Link to="/menu" className="order-page__back-link">
            <ArrowLeft size={16} /> Back to menu
          </Link>
        </div>
      </section>
    </>
  );
}
