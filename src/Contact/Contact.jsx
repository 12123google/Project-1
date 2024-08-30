import React from 'react';
import './Contact.css'
function Contact() {
  return (
    <section id="Contact">
      <CC />
    </section>
  );
}

function CC() {
  return (
    <div className="CC">
      <h3>Bizimlə əlaqə saxla</h3>
      <input type="text" placeholder="Adınız" className='inp' />
      <input type="text" placeholder="Soyadınız" className='inp' />
      <input type="tel" placeholder="Telefon nömrəniz" className='inp' />
      <input type="email" placeholder="Emailiniz" className='inp' />
      <p>Mesajınız</p>
      <input type="text" className='biginp'/>
      <button>Mesajı göndərin</button>
    </div>
  );
}

export default Contact;
