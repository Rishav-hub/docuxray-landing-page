import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '@/contexts/ModalContext';
import styles from './BaseModal.module.css';

interface BaseModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

function BaseModal({ isOpen, title, children }: BaseModalProps) {
  const { closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`${styles.modal} ${styles.show}`} ref={modalRef}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <span className={styles.modalClose} onClick={closeModal}>
            &times;
          </span>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default BaseModal;

