import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../images/logo.png';

const Header = ({usersRef, signRef}) => {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({block: 'start', behavior: 'smooth'});
  };

  return (
    <header className={styles.main}>
      <img src={logo} alt="TESTTASK"/>
      <div className={styles.buttons}>
        <Button onClick={() => scrollTo(usersRef)}>Users</Button>
        <Button onClick={() => scrollTo(signRef)}>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;