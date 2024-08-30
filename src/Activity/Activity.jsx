import React, { useState } from 'react';
import DetailedView from './DetailedView';
import './Activity.css';

function Activity() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  if (selectedActivity) {
    return <DetailedView />;
  }

  return (
    <section id='Activity'>
      <h1>Fəaliyyətlər</h1>
      <div className="ACs">
        <ActivCard name='Şəxsi inkişaf' img={"/public/Gallery.jpg"} onClick={() => setSelectedActivity('Şəxsi inkişaf')} />
        <ActivCard name='Əyləncə' img={"/public/Gallery.jpg"} onClick={() => setSelectedActivity('Əyləncə')} />
        <ActivCard name='İncəsənət' img={"/public/Gallery.jpg"} onClick={() => setSelectedActivity('İncəsənət')} />
        <ActivCard name='İstirahət' img={"/public/Gallery.jpg"} onClick={() => setSelectedActivity('İstirahət')} />
      </div>
    </section>
  );
}

function ActivCard({ name, img, onClick }) {
  return (
    <div className="AC" onClick={onClick}>
      <h5>{name}</h5>
      <div 
        className="AC-img" 
        style={{ backgroundImage: `url(${img})` }}>
      </div>
    </div>
  );
}

export default Activity;
