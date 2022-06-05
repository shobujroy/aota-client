import React from 'react'
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-md-5">
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <h5>Phone</h5>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          {/* another one */}
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <h5>Email</h5>
              <p>aota@email.com</p>
            </div>
          </div>
          {/* another one */}
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <h5>Address</h5>
              <p>4517 Back Street, NY</p>
            </div>
          </div>
          {/* another one */}
        </div>
        <div className="col-md-7">
          <h5>Drop Us a Message</h5>
          <p className="mt-3">
            Feel free to contact us anytime. We’re available here for you.
          </p>
          {/* Contact form component */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact