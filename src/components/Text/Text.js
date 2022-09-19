import React from 'react';
import styles from './Text.module.scss';

const Text = ({children, className}) => {
  const classes = className || '';
  return (
    <p className={`${styles.main} ${classes}`}>{children}</p>
  );
};

export default Text;