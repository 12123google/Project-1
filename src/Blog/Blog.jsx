import React, { useState } from 'react';
import './Blog.css'
function Blog() {
  const [filter, setFilter] = useState('any');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section id='Blog'>
      <label htmlFor="check">Filter</label>
      <select id="check" value={filter} onChange={handleFilterChange}>
        <option value='any'>Sahə 1</option>
        <option value='blog2'>Sahə 2</option>
      </select>
      
      {filter === 'any' ? <BlogList /> : <BlogList2 />}
    </section>
  );
}

function BlogList() {
  return (
    <div className="Blogz">
      <OneBlog name={'Xəbərin adı'} date={'13/06/2024'} imageUrl={'../public/blog1.png'} />
      <OneBlog name={'Xəbərin adı'} date={'13/06/2024'} imageUrl={'../public/blog2.jpg'} />
      <OneBlog name={'Xəbərin adı'} date={'13/06/2024'} imageUrl={'../public/blog2.jpg'} />
      <OneBlog name={'Xəbərin adı'} date={'13/06/2024'} imageUrl={'../public/blog1.png'} />
    </div>
  );
}

function BlogList2() {
  return (
    <div className="Blog2">
      <OneBlog name={'Different Blog Title'} date={'15/06/2024'} imageUrl={'/Blog2.jpg'} />
      {/* Добавьте другие блоги для этой секции */}
    </div>
  );
}

function OneBlog({ date, imageUrl, name }) {
  return (
    <div className="oblog">
      <div className="oblog-img-container" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="blog-content-box">        
          <h5>{name}</h5>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
