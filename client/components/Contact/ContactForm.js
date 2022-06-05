import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" className="form-control contact-form" id="exampleFormControlInput1" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control contact-form" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Subject</label>
        <input type="text" className="form-control contact-form" id="exampleFormControlInput1" placeholder="Enter the message subject" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control contact-form" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message...'></textarea>
      </div>
      <button type="submit" className={`btn ${ styles.contactSubmitBtn }`}>Send Message</button>
    </div>
  )
}

export default ContactForm