import { Leaf, Heart, Users, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useReveal } from '../hooks/useReveal';
import { team } from '../data';
import './pages.css';

const values = [
  { icon: Leaf, title: 'Fresh First', desc: 'We source quality ingredients and let them speak. Nothing on the plate is an afterthought.' },
  { icon: Heart, title: 'Made With Care', desc: 'Every dish is prepared with intention. A meal should feel personal, warm, and considered.' },
  { icon: Users, title: 'Gathering Space', desc: 'We built VERELI to bring people together — friends, families, and first dates alike.' },
  { icon: Globe, title: 'Global Inspiration', desc: 'Our recipes draw from kitchens across the world, reimagined with a modern touch.' },
];

export default function About() {
  const storyRef = useReveal();
  const philosophyRef = useReveal();
  const valuesRef = useReveal();
  const teamRef = useReveal();

  return (
    <>
      <PageHeader
        label="Our Story"
        title="About VERELI"
        subtitle="A fictional modern restaurant born from a love of food, gathering, and the flavors that connect us all."
        image="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
        imageAlt="Elegant indoor restaurant setting with wooden furniture, warm lighting, and decorative foliage."
      />

      <section className="section">
        <div className="container about-story__grid" ref={storyRef}>
          <div className="about-story__images">
            <div className="about-story__image-main">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=800&w=640"
                alt="Two male chefs in aprons cook attentively in a contemporary open kitchen setting."
                loading="lazy"
              />
            </div>
            <div className="about-story__image-accent">
              <img
                src="https://images.pexels.com/photos/8629083/pexels-photo-8629083.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Chef's hand preparing chopped green vegetables on a cutting board in a kitchen."
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-story__text">
            <span className="section-label">How It Began</span>
            <h2 className="section-title">From a small idea<br />to a gathering place</h2>
            <p>
              VERELI started with a simple conviction: that good food brings people together. What
              began as informal Sunday gatherings — friends cooking together, sharing recipes from
              their travels — grew into something bigger.
            </p>
            <p>
              Today, VERELI is a restaurant that celebrates the connections between flavors, cultures,
              and people. We take familiar dishes and give them a modern interpretation, always with
              fresh ingredients and always with care.
            </p>
            <p>
              Our kitchen is led by a team that has cooked across three continents, but the philosophy
              is simple: source well, prepare thoughtfully, and serve generously.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-philosophy" ref={philosophyRef}>
        <div className="container">
          <div className="about-philosophy__inner">
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">Food should feel personal</h2>
            <p>
              We believe a restaurant is more than a menu — it is a place where moments happen. A
              first date, a family celebration, a quiet solo lunch. Every plate that leaves our
              kitchen is an invitation to slow down and enjoy.
            </p>
            <p>
              That is why we invest in fresh ingredients, take the time to prepare each dish properly,
              and design our space to feel warm and welcoming. We want you to return — not just for
              the food, but for how the experience makes you feel.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="about-values__header" ref={valuesRef}>
            <span className="section-label">What We Believe</span>
            <h2 className="section-title">Our values</h2>
          </div>
          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div className="about-values__card" key={value.title}>
                  <div className="about-values__icon">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="about-values__title">{value.title}</h3>
                  <p className="about-values__desc">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <div className="about-team__header" ref={teamRef}>
            <span className="section-label">The Kitchen</span>
            <h2 className="section-title">Meet the team</h2>
            <p className="section-subtitle">
              Fictional demo profiles — the people behind the VERELI kitchen.
            </p>
          </div>
          <div className="about-team__grid">
            {team.map((member) => (
              <div className="about-team__card" key={member.name}>
                <div className="about-team__image-wrapper">
                  <img src={member.image} alt={member.alt} loading="lazy" />
                </div>
                <div className="about-team__info">
                  <h3 className="about-team__name">{member.name}</h3>
                  <span className="about-team__role">{member.role}</span>
                  <p className="about-team__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
