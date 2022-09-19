import React, {useCallback, useEffect, useState} from 'react';
import Get from '../Get/Get';
import Post from '../Post/Post';

const Users = ({usersRef, signRef, className}) => {
  const [users, setUsers] = useState([]);
  const [position, setPosition] = useState({page: 1, count: 6, totalPages: null, totalUsers: null});
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = useCallback(async (page, count) => {
    setIsLoading(true);
    const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`).then((response) => {
      return response.json();
    });
    setIsLoading(false);
    setPosition(prevState  => ({...prevState, totalPages: data.total_pages, totalUsers: data.total_users}));
    if (page === 1) {
      setUsers(data.users);
      return;
    }
    setUsers(prevState => ([...prevState, ...data.users]));
  }, []);

  useEffect(() => {
    getUsers(position.page, position.count);
  }, [getUsers, position.count, position.page, position.totalPages, position.totalUsers]);

  return (
    <>
      <Get className={className} usersRef={usersRef} users={users} position={position} setPosition={setPosition} isLoading={isLoading}/>
      <Post className={className} signRef={signRef} setPosition={setPosition}/>
    </>
  );
};

export default Users;