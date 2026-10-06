import { useState, useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useReveal } from '../hooks/useReveal';
import { galleryImages, galleryCategories } from '../data';
import './pages.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const headerRef = useReveal();

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, filteredImages.length]);

  return (
    <>
      <PageHeader
        label="Gallery"
        title="A glimpse of VERELI"
        subtitle="From the kitchen to the dining room — moments of food, people, and atmosphere."
        image="https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
        imageAlt="Warm and inviting restaurant setting with elegant leather seating and table setting."
      />

      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-page__filters" ref={headerRef}>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`gallery-page__filter ${activeCategory === cat ? 'gallery-page__filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-page__grid">
            {filteredImages.map((img, index) => (
              <button
                key={`${img.src}-${index}`}
                className={`gallery-page__item gallery-page__item--${img.span}`}
                onClick={() => openLightbox(index)}
                aria-label={`View image: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="gallery-page__item-category">{img.category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close image viewer">
            <X size={28} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length); }} aria-label="Previous image">
            ‹
          </button>
          <img
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % filteredImages.length); }} aria-label="Next image">
            ›
          </button>
          <span className="lightbox__counter">{lightboxIndex + 1} / {filteredImages.length}</span>
        </div>
      )}
    </>
  );
}
