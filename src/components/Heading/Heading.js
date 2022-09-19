import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({children, className}) => {
  const classes = className || '';
  return (
    <h1 className={`${styles.main} ${classes}`}>{children}</h1>
  );
};

export default Heading;