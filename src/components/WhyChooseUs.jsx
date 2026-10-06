import { Leaf, ChefHat, Clock, Heart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import './WhyChooseUs.css';

const features = [
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'Quality ingredients and thoughtful preparation in every dish.' },
  { icon: ChefHat, title: 'Expert Preparation', desc: 'Every dish is carefully prepared by our kitchen team.' },
  { icon: Clock, title: 'Fast Service', desc: 'Good food should not require an unnecessarily long wait.' },
  { icon: Heart, title: 'Made With Care', desc: 'Every meal should feel personal and considered.' },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section className="section why">
      <div className="container">
        <div className="why__header" ref={ref}>
          <span className="section-label">Why VERELI</span>
          <h2 className="section-title">What makes us different</h2>
        </div>
        <div className="why__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const ref = useReveal();
  const Icon = feature.icon;

  return (
    <div className="why__card" ref={ref}>
      <div className="why__icon">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="why__title">{feature.title}</h3>
      <p className="why__desc">{feature.desc}</p>
    </div>
  );
}
