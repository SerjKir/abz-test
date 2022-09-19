import React from 'react';
import styles from './Get.module.scss';
import Heading from '../Heading/Heading';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

const Get = ({className, usersRef, users, position, setPosition, isLoading}) => {
  const classes = className || '';

  const showMore = () => {
    setPosition(prevState => ({...prevState, page: prevState.page + 1}))
  };

  return (
    <div ref={usersRef} className={`${styles.main} ${classes}`}>
      <Heading>Working with GET request</Heading>
      <div className={styles.users}>
        {users.map(user => <Card key={user.id} user={user}/>)}
      </div>
      <div className={styles.btn}>
        {position.totalPages !== position.page && (isLoading ? <Preloader/> : <Button onClick={showMore}>Show more</Button>)}
      </div>
    </div>
  );
};

export default Get;