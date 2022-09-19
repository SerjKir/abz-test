import React from 'react';
import styles from './Container.module.scss';

const Container = ({children, bg, className}) => {
  const classes = className || '';
  const classesAll = [styles.main, classes];
  bg === 'light-gray' && classesAll.push(styles.lightGray);

  return (
    <div className={classesAll.join(' ')}>
      {children}
    </div>
  );
};

export default Container;