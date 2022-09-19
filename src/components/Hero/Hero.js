import React from 'react';
import styles from './Hero.module.scss';
import bg from '../../images/hero_background.png';
import Heading from '../Heading/Heading';
import {heroText} from '../../helpers/data';
import Text from '../Text/Text';
import Button from '../Button/Button';

const Hero = ({signRef}) => {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({block: 'start', behavior: 'smooth'});
  };

  return (
    <div className={styles.main} style={{backgroundImage: `url(${bg})`}}>
      <div className={styles.box}>
        <Heading className={styles.title}>Test assignment for front-end developer</Heading>
        <Text className={styles.text}>{heroText}</Text>
        <Button onClick={() => scrollTo(signRef)} className={styles.btn}>Sign up</Button>
      </div>
    </div>
  );
};

export default Hero;