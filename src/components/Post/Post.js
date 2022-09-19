import React, {useCallback, useEffect, useState} from 'react';
import styles from './Post.module.scss';
import Heading from '../Heading/Heading';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '../Button/Button';
import success from '../../images/success-image.png';

const Post = ({className, signRef, setPosition}) => {
  const classes = className || '';
  const [positions, setPositions] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const getPositions = useCallback(async () => {
    const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`).then((response) => {
      return response.json();
    });
    setPositions(data.positions);
  }, []);

  const {
    register,
    handleSubmit,
    // setError,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onBlur',
  });

  const validateImg = img => {
    console.log(img)
    if (img[0].size > 5000000) return 'Файл слишком большой. Максимум 5mb';
    if (img[0].type !== 'image/jpeg') return 'Не верный формат. Нужно jpg/jpeg';
    return true;
  };

  const onSubmit = async values => {
    const {token} = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
      .then(response => response.json());
    const formData = new FormData();
    formData.append('position_id', values.position);
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('photo', values.image[0]);
    const {success} = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST', body: formData, headers: {
        'Token': token
      }
    }).then(response => response.json());
    if (success) {
      console.log('success');
      setPosition({page: 1, count: 6, totalPages: null, totalUsers: null});
      setIsRegistered(true);
      return;
    }
    console.log('something goes wrong');
  };

  useEffect(() => {
    getPositions();
  }, [getPositions]);

  return (
    <form ref={signRef} className={`${styles.main} ${classes}`} onSubmit={handleSubmit(onSubmit)}>
      <Heading>{isRegistered ? 'User successfully registered' : 'Working with POST request'}</Heading>
      {isRegistered
        ? <img className={styles.img} src={success} alt="success"/>
        : <div className={styles.inner}>
          <div className={styles.inputs}>
            <TextField
              InputLabelProps={{
                style: {color: '#7E7E7E',}
              }}
              fullWidth
              className={styles.input}
              type={'text'}
              label="Your name"
              variant="outlined"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              {...register('name', {
                required: 'Укажите имя',
                minLength: {value: 2, message: 'Минимум 2 символа'},
                maxLength: {value: 60, message: 'Максимум 60 символов'}
              })}
            />
            <TextField
              InputLabelProps={{
                style: {color: '#7E7E7E',}
              }}
              fullWidth
              className={styles.input}
              type={'email'}
              label="Email"
              variant="outlined"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register('email', {
                required: 'Укажите почту',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Введите правильный email'
                }
              })}
            />
            <TextField
              InputLabelProps={{
                style: {color: '#7E7E7E',}
              }}
              fullWidth className={styles.input}
              type={'text'}
              label="Phone"
              variant="outlined"
              error={!!errors.phone?.message}
              helperText={errors.phone?.message || '+38 (XXX) XXX - XX - XX'}
              {...register('phone', {
                required: 'Укажите номер телефона',
                pattern: {
                  value: /^[\+]?380([0-9]{9})$/gm,
                  message: 'Введите правильный номер'
                },
                // validate: validatePhone
              })}
            />
            <FormControl className={styles.radios}>
              <FormLabel>Select your position</FormLabel>
              <RadioGroup>
                {positions.map(position => <FormControlLabel {...register('position', {required: 'Укажите позицию'})}
                                                             key={position.id} className={styles.radio}
                                                             value={position.id}
                                                             control={<Radio/>} label={position.name}/>)}
              </RadioGroup>
            </FormControl>
          </div>
          <div className={styles.file}>
            <input
              type="file"
              {...register('image', {required: 'Укажите изображение', validate: validateImg})}
            />
            <p>{errors.image?.message}</p>
          </div>
          <Button className={styles.btn} type={'submit'} disabled={!isValid}>Sign up</Button>
        </div>
      }
    </form>
  );
};

export default Post;