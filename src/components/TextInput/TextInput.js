import React from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({name, placeholder, helper, required}) => {
  return (
    <div className={`${styles.main} ${styles.error}`}>
      <input required={required} placeholder=" " className={styles.input} id={name} name={name} type="text" />
      <div className={styles.label}>
        <label htmlFor={name}>{placeholder}</label>
        <span></span>
      </div>

      <span className={styles.helper}>{helper}</span>
    </div>
  );
};

export default TextInput;