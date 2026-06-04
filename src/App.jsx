import React from 'react';
import { 
  Building2, 
  Leaf, 
  Coffee, 
  Heart,
  Camera,
  TrendingUp,
  Search,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import './index.css';

const brands = [
  {
    name: 'Snaqary',
    category: 'Healthy Snacking / F&B',
    followers: '12K',
    url: 'https://www.instagram.com/snaqary/',
    description: 'They take traditional Indian snacks like khakhra and mathri and give them a modern, guilt-free, baked twist.',
    icon: <Coffee size={24} />
  },
  {
    name: 'Petveda',
    category: 'Pet Care & Wellness',
    followers: '4.3K',
    url: 'https://www.instagram.com/petveda/',
    description: 'They stand out by bringing traditional Indian Ayurvedic healing principles and natural ingredients into the modern pet grooming space.',
    icon: <Heart size={24} />
  },
  {
    name: 'The Switch Fix',
    category: 'Clean Beauty / Personal Care',
    followers: '17K',
    url: 'https://www.instagram.com/theswitchfix.co/',
    description: 'A highly sustainable brand focusing on solid haircare bars and waterless beauty products specifically formulated to combat pollution.',
    icon: <Building2 size={24} />
  },
  {
    name: 'TreeWear',
    category: 'Eco-Friendly Personal Care',
    followers: '5.1K',
    url: 'https://www.instagram.com/treewear/',
    description: 'They offer natural deodorants and sanitizers, with a strong commitment to a "buy one, plant one" initiative, actively planting trees for every product sold.',
    icon: <Leaf size={24} />
  },
  {
    name: 'Bombay Island Coffee Company',
    category: 'Artisanal F&B',
    followers: '9.6K',
    url: 'https://www.instagram.com/bombayisland/',
    description: 'An artisanal roaster focused on freshly roasted, high-quality Indian coffee beans sourced directly from estates, democratizing specialty grade coffee.',
    icon: <Coffee size={24} />
  }
];

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-subtitle">Kairon Capital Internship Application</p>
          <h1 className="text-gradient">Early-Stage Indian Consumer Landscape</h1>
          <p className="hero-description">
            A curated selection of 5 high-potential, under-the-radar consumer goods brands 
            with less than 30,000 Instagram followers, alongside investment evaluation criteria.
          </p>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section id="brands" className="container">
        <h2><span className="text-accent">01.</span> Selected Brands</h2>
        <p className="text-secondary">Physical consumer products strictly under the 30K follower threshold.</p>
        
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card glass-panel hover-lift">
              <div className="brand-header">
                <div>
                  <h3 className="brand-title">{brand.name}</h3>
                  <span className="brand-category">{brand.category}</span>
                </div>
                <div style={{ color: 'var(--accent-color)' }}>
                  {brand.icon}
                </div>
              </div>
              
              <div className="brand-stats">
                <Camera size={16} />
                <span>{brand.followers}</span>
              </div>
              
              <p className="brand-description">{brand.description}</p>
              
              <a href={brand.url} target="_blank" rel="noopener noreferrer" className="brand-link">
                View on Instagram <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology & Essay Section */}
      <section id="evaluation" className="container">
        <div className="content-grid">
          
          {/* Methodology */}
          <div className="content-block glass-panel">
            <h2><Search size={28} /> Selection Methodology</h2>
            <p className="text-secondary">How these brands were filtered and evaluated:</p>
            
            <ul className="methodology-list">
              <li className="methodology-item">
                <div className="method-icon"><CheckCircle size={24} /></div>
                <div className="method-content">
                  <h4>Strict Criteria Enforcement</h4>
                  <p>All brands are confirmed to sell physical consumer goods (no SaaS/Services) and are based in India.</p>
                </div>
              </li>
              <li className="methodology-item">
                <div className="method-icon"><Camera size={24} /></div>
                <div className="method-content">
                  <h4>Follower Verification</h4>
                  <p>Instagram counts were audited via headless browser to ensure they fall strictly below the 30,000 follower limit.</p>
                </div>
              </li>
              <li className="methodology-item">
                <div className="method-icon"><TrendingUp size={24} /></div>
                <div className="method-content">
                  <h4>Traction Signals</h4>
                  <p>Looked for brands demonstrating strong early engagement, clear differentiation, and alignment with modern consumer shifts (sustainability, clean ingredients).</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Investment Essay */}
          <div className="content-block glass-panel">
            <h2><TrendingUp size={28} /> Investment Philosophy</h2>
            <p className="text-secondary" style={{marginBottom: '2rem'}}>Evaluating an early-stage consumer goods company:</p>
            
            <div className="essay-text">
              <p>
                If I were putting my own money into an early-stage consumer brand making less than ₹50 crore a year, I wouldn't look at spreadsheets first. I would look at the product and the people who buy it.
              </p>
              <p>
                The very first test is simple: is the product actually better? I want to see if customers are genuinely obsessed with it. I look for organic word-of-mouth. If a brand has to pay heavily for every single customer, that's a red flag. I want to see a community of early adopters who love the product so much that they recommend it to their friends without being asked.
              </p>
              <p>
                Second, I evaluate the founder's connection to the problem. The best consumer founders aren't just looking for a market opportunity; they are building something they desperately wanted themselves. This authentic passion translates into an uncompromising approach to quality and customer experience.
              </p>
              <p>
                Next, I look at the repeat purchase rate. Anyone can be tricked into buying a product once through clever marketing. But if they buy it a second and third time, that proves real value. High repeat purchases mean the product solves a real problem and fits seamlessly into the consumer's daily routine.
              </p>
              <p>
                Finally, the basic financials have to make sense even at a small scale. I want to see healthy gross margins early on. If a company is losing money on every sale and hoping scale will magically fix it, that is too risky. A good consumer business should make a clear profit on the actual product before factoring in overheads.
              </p>
              <p style={{fontStyle: 'italic', color: 'var(--text-primary)', fontWeight: '500'}}>
                Ultimately, early-stage consumer investing is about finding a phenomenal product built by authentic founders, loved by a core group of loyal customers, and sold with sound basic math.
              </p>
            </div>
          </div>

        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Kairon Capital Application Dashboard</p>
        </div>
      </footer>
    </>
  );
}

export default App;
