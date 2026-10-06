import { MessageCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { whatsappLink } from '../data';
import './CTA.css';

export default function CTA() {
  const ref = useReveal();

  return (
    <section className="cta" ref={ref}>
      <div className="cta__overlay" />
      <div className="container cta__content">
        <h2 className="cta__title">Hungry yet?</h2>
        <p className="cta__subtitle">
          Order your favorite meal and make your next gathering a little more memorable.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta__btn">
          <MessageCircle size={20} /> Order on WhatsApp
        </a>
      </div>
    </section>
  );
}
