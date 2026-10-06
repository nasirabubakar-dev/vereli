import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { galleryImages } from '../data';
import FeaturedMenu from '../components/FeaturedMenu';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import './pages.css';

export default function Home() {
  const heroRef = useReveal();
  const galleryRef = useReveal();

  return (
    <>
      <section className="home-hero" ref={heroRef}>
        <div className="home-hero__image-wrapper">
          <img
            src="https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
            alt="Various appetizing dishes served on white plates and glasses of wine on a wooden table in a modern light restaurant"
            className="home-hero__image"
            loading="eager"
          />
          <div className="home-hero__overlay" />
        </div>
        <div className="home-hero__content">
          <span className="home-hero__label">Modern Global Restaurant</span>
          <h1 className="home-hero__title">Flavors worth<br />gathering for.</h1>
          <p className="home-hero__subtitle">
            VERELI serves thoughtfully prepared dishes inspired by flavors from around the world —
            made with fresh ingredients and served in a warm, contemporary space.
          </p>
          <div className="home-hero__actions">
            <Link to="/menu" className="btn btn-primary">
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link to="/order" className="btn btn-secondary">
              <ShoppingBag size={18} /> Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-intro">
        <div className="container home-intro__grid">
          <div className="home-intro__text">
            <span className="section-label">Welcome to VERELI</span>
            <h2 className="section-title">A modern take on<br />familiar flavors</h2>
            <p>
              We draw inspiration from kitchens across the world, reimagining familiar dishes with
              fresh ingredients and thoughtful preparation. Every plate is made with care — from
              sourcing to presentation.
            </p>
            <Link to="/about" className="home-intro__link">
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="home-intro__image">
            <img
              src="https://images.pexels.com/photos/5491046/pexels-photo-5491046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Tasty stuffed celery and grilled steak decorated with fresh green herbs served on plate in a restaurant."
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <FeaturedMenu />

      <WhyChooseUs />

      <section className="section home-gallery-preview">
        <div className="container">
          <div className="home-gallery-preview__header" ref={galleryRef}>
            <span className="section-label">Gallery</span>
            <h2 className="section-title">A glimpse of VERELI</h2>
            <Link to="/gallery" className="home-gallery-preview__link">
              View full gallery <ArrowRight size={16} />
            </Link>
          </div>
          <div className="home-gallery-preview__grid">
            {galleryImages.slice(0, 4).map((img, index) => (
              <div className="home-gallery-preview__item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
