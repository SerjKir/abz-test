import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = ({children, fullwidth}) => {
  const classes = [styles.main];
  if (fullwidth) classes.push(styles.fullWidth);

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
};

export default Wrapper;