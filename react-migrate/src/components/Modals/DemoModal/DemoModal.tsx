import { useState, FormEvent } from 'react';
import { useModal } from '@/contexts/ModalContext';
import BaseModal from '../BaseModal/BaseModal';
import styles from './DemoModal.module.css';

function DemoModal() {
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
    <BaseModal isOpen={currentModal === 'demo'} title="Request a Demo">
      <form className={styles.modalForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="demo-name">Full Name</label>
          <input type="text" id="demo-name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="demo-email">Business Email</label>
          <input type="email" id="demo-email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="demo-company">Company</label>
          <input type="text" id="demo-company" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="demo-use-case">Primary Use Case</label>
          <select id="demo-use-case" required>
            <option value="">Select use case</option>
            <option value="contracts">Contract Analysis</option>
            <option value="invoices">Invoice Processing</option>
            <option value="compliance">Compliance Documents</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className={`${styles.btn} ${styles.btnPrimary}`}
          disabled={isSubmitting || isSuccess}
          style={isSuccess ? { background: '#10B981' } : {}}
        >
          {isSubmitting ? 'Scheduling...' : isSuccess ? 'Demo Scheduled!' : 'Schedule Demo'}
        </button>
      </form>
    </BaseModal>
  );
}

export default DemoModal;

