import { useState, ChangeEvent, DragEvent } from 'react';
import { useModal } from '@/contexts/ModalContext';
import BaseModal from '../BaseModal/BaseModal';
import styles from './UploadModal.module.css';

function UploadModal() {
  const { currentModal, closeModal } = useModal();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            alert('Document uploaded successfully! Processing will begin shortly.');
            closeModal();
            setIsUploading(false);
            setProgress(0);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  return (
    <BaseModal isOpen={currentModal === 'upload'} title="Upload Sample Document">
      {!isUploading ? (
        <div
          className={`${styles.uploadArea} ${isDragging ? styles.dragging : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={styles.uploadIcon}>📄</div>
          <p>Drag & drop your document here or click to browse</p>
          <input
            type="file"
            id="document-upload"
            accept=".pdf,.doc,.docx,.jpg,.png"
            style={{ display: 'none' }}
            onChange={handleFileInput}
          />
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => document.getElementById('document-upload')?.click()}
          >
            Choose File
          </button>
          <p className={styles.uploadNote}>
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>
      ) : (
        <div className={styles.uploadProgress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <p>Processing document...</p>
        </div>
      )}
    </BaseModal>
  );
}

export default UploadModal;

