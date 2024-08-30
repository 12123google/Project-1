import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id='home'>
      <div className="hsi"></div>
      <Activities />
      <Review />
      <Blogs />
    </section>
  );
}

function Activities() {
  return (
    <div className='activities'>
      <h2>Fəaliyyətlər</h2>
      <div className="card-list">
        <Activity name="Şəxsi inkişaf" />
        <Activity name="Əyləncə" />
        <Activity name="İncəsənət" />
        <Activity name="İstirahət" />
      </div>
    </div>
  );
}

function Activity({ name }) {
  return (
    <div className="activity">
      <h3>{name}</h3>
      <div className="img-container"></div>
    </div>
  );
}

function Review() {
  return (
    <section className="review">
      <h2>Rəylər</h2>
      <div className="quote">
        <span className="quote-icon">❝</span>
        <p>Bu Master Klass çox faydalı oldu</p>
        <p className="author">Əli Salmanov</p>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section className='blogs'>
      <h2>Bloqlar</h2>
      <div className="blog-list">
        <Blog name="Bloqun adı" imageUrl="../public/blog1.png" />
        <Blog name="Bloqun adı" imageUrl="../public/blog2.jpg" />
        <Blog name="Bloqun adı" imageUrl="../public/blog2.jpg" />
        <Blog name="Bloqun adı" imageUrl="../public/blog1.png" />
      </div>
    </section>
  );
}

function Blog({ name, imageUrl }) {
  return (
    <div className="blog">
      <h3>{name}</h3>
      <div className="blog-img-container" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
}

export default Home;
