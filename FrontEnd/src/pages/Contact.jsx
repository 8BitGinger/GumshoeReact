import React from 'react';
import ContactForm from '../components/ContactForm';
import PenroseHeader from '../components/penroseHeader';

const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay" id="top">
      <section className="container page">
        <h1>
          <PenroseHeader />
          Contact The Developer
        </h1>
        <div className="contact-form">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
