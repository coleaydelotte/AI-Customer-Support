"use client";

import './home.css'

import Bot from './bot/bot'

export default function Home() {

 
  return (
    <div className='home'>
    <Bot />
    <header>
      <h1>Sell Your Products with Ease</h1>
      <p>Our platform makes it simple to reach a global audience and grow your business.</p>
      <button>Get Started</button>
    </header>

    <main>
      <section className='features'>
        <h2>Key Features</h2>
        <ul>
          <li>Easy-to-use online store builder</li>
          <li>Secure payment processing</li>
          <li>Comprehensive analytics and reporting</li>
          <li>Customizable marketing tools</li>
        </ul>
      </section>

      <section className='testimonials'>
        <h2>What Our Customers Say</h2>
        <blockquote>
          <p>"Using this platform has been a game-changer for my business. It's never been easier to sell online."</p>
          - John Doe, Small Business Owner
        </blockquote>
        <blockquote>
          <p>"The features and support have helped me grow my sales exponentially. Highly recommended!"</p>
          - Jane Smith, Ecommerce Entrepreneur
        </blockquote>
      </section>

      <section className='cta'>
        <h2>Start Selling Today</h2>
        <p>Join thousands of businesses who trust our platform to power their online sales.</p>
        <button>Sign Up Now</button>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Sell Products. All rights reserved.</p>
    </footer>
  </div>
);


}
