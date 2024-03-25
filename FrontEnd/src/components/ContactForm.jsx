import { useForm, ValidationError } from '@formspree/react';
import stamp from '../assets/images/gumshoeStamp.png';

function sendEmail() {
  alert('Email Sent!');
  document.getElementById('contactForm').classList.add('hide');
}

function ContactForm() {
  const [state, handleSubmit] = useForm('xkndbbjk');
  if (state.succeeded) {
    document.getElementById('contactForm').reset();

    return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="row3">
      <form
        id="contactForm"
        action="https://formspree.io/f/xkndbbjk"
        method="POST"
        className="card form"
        onSubmit={sendEmail}
      >
        <label htmlFor="name">Name</label>
        <input id="name" type="name" name="name" />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="download-btn"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <img src={stamp} alt="stamp" className="stamp" />
    </div>
  );
}

export default ContactForm;
