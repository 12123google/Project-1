import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [showActivities, setShowActivities] = useState(false);

  const handleItemClick = () => {
    setShowActivities(true);
  };

  return (
    <section id="gallery">
      {!showActivities ? (
        <div className="gallery-grid">
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          <GalleryItem name="Fotonun adı" imageUrl="/public/Gallery.jpg" onClick={handleItemClick} />
          </div>
      ) : (
        <Activities />
      )}
    </section>
  );
}

function GalleryItem({ name, imageUrl, onClick }) {
  return (
    <div className="gallery-item" onClick={onClick}>
      <div
        className="gallery-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p>{name}</p>
    </div>
  );
}

function Activities() {
  return (
    <section id="activitieZ">
      <h2>Şahmat dərsləri</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae viverra diam. In
        pellentesque et urna nec laoreet. Aliquam ut neque ut neque commodo pharetra. Donec at nisl
        pulvinar, sagittis mi quis, condimentum justo. Morbi sagittis convallis diam nec commodo.
        Sed rutrum lorem nec lacus sagittis ultricies.
      </p>
      
      <div className="slider">
        <button className="slider-button prev">&#10094;</button>
        <div className="slider-image" style={{ backgroundImage: "url('/public/Activ1.jpg')" }}></div>
        <button className="slider-button next">&#10095;</button>
      </div>
      
      <div className="activities-grid">
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
        <ActivityItem name="Fotonun adı" imageUrl="/public/Activ2.jpg" />
      </div>
    </section>
  );
}

function ActivityItem({ name, imageUrl }) {
  return (
    <div className="activity-item">
      <div
        className="activity-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p>{name}</p>
    </div>
  );
}

export default Gallery;
