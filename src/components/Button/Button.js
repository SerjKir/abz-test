import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, className, onClick, disabled, type}) => {
  const classes = className || '';

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`${styles.main} ${classes}`}>{children}</button>
  );
};

export default Button;