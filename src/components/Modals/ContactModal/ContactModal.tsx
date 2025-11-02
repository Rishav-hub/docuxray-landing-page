import { useState, FormEvent } from 'react';
import { useModal } from '@/contexts/ModalContext';
import BaseModal from '../BaseModal/BaseModal';
import styles from './ContactModal.module.css';

function ContactModal() {
  const { currentModal, closeModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        closeModal();
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 2000);
    }, 1500);
  };

  return (
    <BaseModal isOpen={currentModal === 'contact'} title="Contact Sales">
      <form className={styles.modalForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-name">Full Name</label>
          <input type="text" id="contact-name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-email">Business Email</label>
          <input type="email" id="contact-email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-company">Company</label>
          <input type="text" id="contact-company" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Tell us about your document processing needs..."
          />
        </div>
        <button
          type="submit"
          className={`${styles.btn} ${styles.btnPrimary}`}
          disabled={isSubmitting || isSuccess}
          style={isSuccess ? { background: '#10B981' } : {}}
        >
          {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>
    </BaseModal>
  );
}

export default ContactModal;

