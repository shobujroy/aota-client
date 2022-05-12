import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="name" class="form-control contact-form" id="exampleFormControlInput1" placeholder="Enter your name" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control contact-form" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Subject</label>
        <input type="text" class="form-control contact-form" id="exampleFormControlInput1" placeholder="Enter the message subject" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control contact-form" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message...'></textarea>
      </div>
      <button type="submit" className={`btn ${ styles.contactSubmitBtn }`}>Send Message</button>
    </div>
  )
}

export default ContactForm