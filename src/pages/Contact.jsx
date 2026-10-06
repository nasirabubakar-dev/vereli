import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useReveal } from '../hooks/useReveal';
import { businessInfo, phoneLink, whatsappLink, emailLink, directionsLink } from '../data';
import './pages.css';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Come and gather"
        subtitle="We would love to welcome you. Reach out to place an order, book a table, or simply say hello."
        image="https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
        imageAlt="A sophisticated indoor wine setting with glasses, a bottle, and warm lighting."
      />

      <section className="section contact-page">
        <div className="container contact-page__grid" ref={ref}>
          <div className="contact-page__info">
            <h2 className="section-title">Visit us</h2>
            <p className="contact-page__intro">
              All contact details below are fictional demo information for this portfolio project.
            </p>

            <div className="contact-page__details">
              <div className="contact-page__detail">
                <MapPin size={20} strokeWidth={1.5} />
                <div>
                  <span className="contact-page__detail-label">Address</span>
                  <span className="contact-page__detail-value">{businessInfo.address}</span>
                </div>
              </div>
              <div className="contact-page__detail">
                <Phone size={20} strokeWidth={1.5} />
                <div>
                  <span className="contact-page__detail-label">Phone</span>
                  <a href={phoneLink} className="contact-page__detail-value">{businessInfo.phone}</a>
                </div>
              </div>
              <div className="contact-page__detail">
                <Mail size={20} strokeWidth={1.5} />
                <div>
                  <span className="contact-page__detail-label">Email</span>
                  <a href={emailLink} className="contact-page__detail-value">{businessInfo.email}</a>
                </div>
              </div>
            </div>

            <div className="contact-page__hours">
              <div className="contact-page__hours-header">
                <Clock size={20} strokeWidth={1.5} />
                <h3 className="contact-page__hours-title">Opening Hours</h3>
              </div>
              {businessInfo.hours.map((entry) => (
                <div className="contact-page__hours-row" key={entry.days}>
                  <span className="contact-page__hours-day">{entry.days}</span>
                  <span className="contact-page__hours-time">{entry.time}</span>
                </div>
              ))}
            </div>

            <div className="contact-page__actions">
              <a href={phoneLink} className="btn btn-dark contact-page__action-btn">
                <Phone size={18} /> Call
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-page__action-btn">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href={emailLink} className="btn btn-secondary contact-page__action-btn">
                <Mail size={18} /> Email
              </a>
              <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-page__action-btn">
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </div>

          <div className="contact-page__right">
            <div className="contact-page__form-wrapper">
              <h2 className="contact-page__form-title">Send us a message</h2>
              <p className="contact-page__form-note">
                This is a frontend-only demo form — no message is actually sent.
              </p>

              {submitted && (
                <div className="contact-page__success" role="status">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been received (demo).</span>
                </div>
              )}

              <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
                <div className="contact-page__field">
                  <label htmlFor="name" className="contact-page__label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`contact-page__input ${errors.name ? 'contact-page__input--error' : ''}`}
                    value={form.name}
                    onChange={handleChange('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span className="contact-page__error" id="name-error">{errors.name}</span>}
                </div>

                <div className="contact-page__field">
                  <label htmlFor="email" className="contact-page__label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`contact-page__input ${errors.email ? 'contact-page__input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span className="contact-page__error" id="email-error">{errors.email}</span>}
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message" className="contact-page__label">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`contact-page__input contact-page__textarea ${errors.message ? 'contact-page__input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span className="contact-page__error" id="message-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary contact-page__submit">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            <div className="contact-page__map">
              <div className="contact-page__map-placeholder">
                <MapPin size={40} strokeWidth={1} />
                <p className="contact-page__map-text">24 Meridian Avenue</p>
                <p className="contact-page__map-subtext">Central District — Demo location</p>
                <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark contact-page__map-btn">
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
