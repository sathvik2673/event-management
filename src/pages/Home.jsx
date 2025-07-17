import React from 'react';
import Slideshow from '../components/Slideshow';

const Home = () => (
  <div className="home">
    <Slideshow />
    <section className="intro">
      <h2>Welcome to Event Manager</h2>
      <p>
        We specialize in organizing unforgettable experiences! Whether you're hosting a birthday party,
        wedding, or corporate meeting — we make it perfect.
      </p>
    </section>
  </div>
);

export default Home;
