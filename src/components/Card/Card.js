import React from 'react';
import styles from './Card.module.scss';
import Text from '../Text/Text';
import defaultUser from '../../images/default_user.svg';
import MyTooltip from '../MyTooltip/MyTooltip';

const Card = ({user}) => {
  const userImg = user.photo !== 'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png' ? user.photo : defaultUser;

  return (
    <div className={styles.main}>
      <div className={styles.img} style={{backgroundImage: `url(${defaultUser})`}}>
        <img src={userImg} alt={user.name}/>
      </div>
      <Text className={`${styles.block} ${styles.center}`}>{user.name}</Text>
      <div className={styles.block}>
        <Text className={styles.center}>{user.position}</Text>
        <MyTooltip className={styles.tooltip} text={user.email}/>
        <Text className={styles.center}>{user.phone}</Text>
      </div>
    </div>
  );
};

export default Card;