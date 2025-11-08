import React from "react";

const Home = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo-link">
            <svg
              className="logo-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff3366" stopOpacity="1" />
                </linearGradient>
              </defs>

              <polygon
                points="50,10 20,50 50,90 80,50"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="3"
              />
              <circle cx="50" cy="50" r="5" fill="url(#logoGrad)" />
            </svg>

            <span className="logo-text">NOIR</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#collections" className="nav-link">
                Collections
              </a>
            </li>
            <li>
              <a href="#featured" className="nav-link">
                Featured
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Get In Touch
              </a>
            </li>
          </ul>
          <div className="menu-toggle" id="menuToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className="mobile-nav" id="mobileNav">
        <ul className="mobile-nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">New Collection 2025</div>
            <h1 className="hero-title">
              <span className="line">
                <span>Redefine</span>
              </span>
              <span className="line">
                <span>
                  Your <span className="accent">Style</span>
                </span>
              </span>
              <span className="line">
                <span>Revolution</span>
              </span>
            </h1>
            <p className="hero-description">
              Discover our avant-garde collection where high fashion meets
              street culture. Each piece tells a story of rebellion, elegance,
              and innovation.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Exclusive Pieces</span>
              </div>
              <div className="stat">
                <span className="stat-number">48H</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Sustainable</span>
              </div>
            </div>
            <div className="cta-group">
              <a href="#collections" className="cta-button primary">
                Explore Collection
              </a>
              <a href="#featured" className="cta-button outline">
                Watch Runway
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <div className="hero-carousel">
                <div className="carousel-slide active">
                  <img
                    src="assets/images/noir-fashion-hero-01.avif"
                    alt="Fashion Model 1"
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src="assets/images/noir-fashion-hero-02.avif"
                    alt="Fashion Model 2"
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src="assets/images/noir-fashion-hero-03.avif"
                    alt="Fashion Model 3"
                  />
                </div>
                <div className="carousel-overlay"></div>
                <div className="carousel-indicators">
                  <span className="indicator active" data-slide="0"></span>
                  <span className="indicator" data-slide="1"></span>
                  <span className="indicator" data-slide="2"></span>
                </div>
              </div>
              <div className="floating-tags">
                <div className="tag">Limited Edition</div>
                <div className="tag">Handcrafted</div>
                <div className="tag">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="section-header">
          <h2 className="section-title">Latest Collections</h2>
          <p className="section-subtitle">Discover our curated selection</p>
        </div>

        <div className="category-tabs">
          <button className="tab-btn active" data-category="all">
            All
          </button>
          <button className="tab-btn" data-category="women">
            Women
          </button>
          <button className="tab-btn" data-category="men">
            Men
          </button>
          <button className="tab-btn" data-category="accessories">
            Accessories
          </button>
          <button className="tab-btn" data-category="limited">
            Limited Edition
          </button>
        </div>

        <div className="grid" id="collectionsGrid">
          <div className="collection-card" data-category="women">
            <div className="collection-thumbnail">
              <img
                src="assets/images/urban-edge.avif"
                alt="Urban Edge Women's Collection"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">New Arrival</span>
              <h3 className="card-title">Urban Edge</h3>
              <p className="card-subtitle">Women's Collection</p>
              <p className="card-price">From $299</p>
            </div>
          </div>
          <div className="collection-card" data-category="limited">
            <div className="collection-thumbnail">
              <img
                src="assets/images/midnight-luxe.avif"
                alt="Midnight Luxe Limited Edition"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Limited</span>
              <h3 className="card-title">Midnight Luxe</h3>
              <p className="card-subtitle">Exclusive Drop</p>
              <p className="card-price">From $899</p>
            </div>
          </div>
          <div className="collection-card" data-category="men">
            <div className="collection-thumbnail">
              <img
                src="assets/images/neo-classic.avif"
                alt="Neo Classic Men's Essentials"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Bestseller</span>
              <h3 className="card-title">Neo Classic</h3>
              <p className="card-subtitle">Men's Essentials</p>
              <p className="card-price">From $399</p>
            </div>
          </div>
          <div className="collection-card" data-category="accessories">
            <div className="collection-thumbnail">
              <img
                src="assets/images/accent-pieces.avif"
                alt="Accent Pieces Accessories"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Trending</span>
              <h3 className="card-title">Accent Pieces</h3>
              <p className="card-subtitle">Accessories</p>
              <p className="card-price">From $149</p>
            </div>
          </div>
          <div className="collection-card" data-category="women">
            <div className="collection-thumbnail">
              <img
                src="assets/images/spring-bloom.avif"
                alt="Spring Bloom Women's Spring"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Pre-Order</span>
              <h3 className="card-title">Spring Bloom</h3>
              <p className="card-subtitle">Women's Spring</p>
              <p className="card-price">From $249</p>
            </div>
          </div>
          <div className="collection-card" data-category="men">
            <div className="collection-thumbnail">
              <img
                src="assets/images/street-rebel.avif"
                alt="Street Rebel Men's Streetwear"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Hot</span>
              <h3 className="card-title">Street Rebel</h3>
              <p className="card-subtitle">Men's Streetwear</p>
              <p className="card-price">From $199</p>
            </div>
          </div>
          <div className="collection-card" data-category="limited">
            <div className="collection-thumbnail">
              <img
                src="assets/images/avant-garde.avif"
                alt="Avant Garde Art Meets Fashion"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Exclusive</span>
              <h3 className="card-title">Avant Garde</h3>
              <p className="card-subtitle">Art Meets Fashion</p>
              <p className="card-price">From $1,299</p>
            </div>
          </div>
          <div className="collection-card" data-category="accessories">
            <div className="collection-thumbnail">
              <img
                src="assets/images/minimal-chic.avif"
                alt="Minimal Chic Timeless Accessories"
              />
            </div>
            <div className="card-content">
              <span className="card-badge">Essentials</span>
              <h3 className="card-title">Minimal Chic</h3>
              <p className="card-subtitle">Timeless Accessories</p>
              <p className="card-price">From $89</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured" id="featured">
        <div className="featured-container">
          <div className="featured-hero">
            <div className="featured-content">
              <span className="label">Crafted with Passion</span>
              <h2>The Art of Fashion</h2>
              <p>
                Where tradition meets innovation. Our master craftsmen blend
                centuries-old techniques with cutting-edge design to create
                pieces that transcend time and trends. This template is proudly
                crafted by TemplateMo, featuring beautiful imagery from
                Unsplash.
              </p>

              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">👑</div>
                  <div className="highlight-title">Premium Quality</div>
                  <div className="highlight-desc">
                    Only the finest materials and fabrics make it into our
                    collections
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌱</div>
                  <div className="highlight-title">Sustainable</div>
                  <div className="highlight-desc">
                    Ethically sourced materials with carbon-neutral production
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">✨</div>
                  <div className="highlight-title">Handcrafted</div>
                  <div className="highlight-desc">
                    Each piece is carefully crafted by skilled artisans
                  </div>
                </div>
              </div>

              <a href="#collections" className="feature-cta">
                Discover Our Craft
              </a>
            </div>

            <div className="featured-image-section">
              <div className="featured-image-grid">
                <div className="featured-img">
                  <img
                    src="assets/images/art-of-fashion-01.avif"
                    alt="Fashion Collection Showcase"
                  />
                </div>
                <div className="featured-img">
                  <img
                    src="assets/images/art-of-fashion-02.avif"
                    alt="Luxury Fashion Details"
                  />
                </div>
                <div className="featured-img">
                  <img
                    src="assets/images/art-of-fashion-03.avif"
                    alt="Artisan Craftsmanship"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="testimonials-header">
              <h3>What Our Customers Say</h3>
              <p className="section-subtitle">
                Real stories from fashion enthusiasts
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-quote">
                  "NOIR has completely transformed my wardrobe. The quality and
                  attention to detail is unmatched. Every piece feels like a
                  work of art."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p>Fashion Blogger</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-quote">
                  "The sustainable approach combined with luxury design is
                  exactly what I was looking for. NOIR proves you don't have to
                  compromise."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">M</div>
                  <div className="author-info">
                    <h4>Marcus Rodriguez</h4>
                    <p>Creative Director</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-quote">
                  "I've been a customer for three years now, and each collection
                  keeps exceeding my expectations. The fit and quality are
                  consistently outstanding."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div className="author-info">
                    <h4>Alexandra Kim</h4>
                    <p>Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you</p>
          </div>

          <div className="contact-content">
            <div className="contact-form-wrapper">
              <form id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Visit Our Flagship Store</h3>
                  <p>
                    123 Fashion Avenue
                    <br />
                    Bangkok, Thailand 10110
                    <br />
                    Siam District
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>
                    Main: <a href="tel:+66021234567">+66 02 123 4567</a>
                    <br />
                    Support: <a href="tel:+66021234568">+66 02 123 4568</a>
                    <br />
                    Mon-Fri, 9AM-6PM ICT
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>
                    General:{" "}
                    <a href="mailto:hello@noir.fashion">hello@noir.fashion</a>
                    <br />
                    Support:{" "}
                    <a href="mailto:support@noir.fashion">
                      support@noir.fashion
                    </a>
                    <br />
                    Press:{" "}
                    <a href="mailto:press@noir.fashion">press@noir.fashion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.551370220076!2d100.53515!3d13.730314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2993fa2f8c6d9%3A0x92cf0e47c4c2ed08!2sSilom%20MRT%20Station!5e0!3m2!1sen!2sth!4v1697000000000"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>NOIR</h3>
            <p>
              Redefining fashion with bold designs, sustainable practices, and
              uncompromising quality. Join us in creating the future of style.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                f
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                t
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                i
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                p
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 NOIR. All rights reserved. | Designed by{" "}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              TemplateMo
            </a>
          </p>

          <div className="payment-methods">
            <div className="payment-icon" aria-label="Visa">
              VISA
            </div>
            <div className="payment-icon" aria-label="Mastercard">
              MC
            </div>
            <div className="payment-icon" aria-label="American Express">
              AMEX
            </div>
            <div className="payment-icon" aria-label="Pay">
              PAY
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
