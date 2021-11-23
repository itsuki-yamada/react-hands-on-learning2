import React, {useReducer} from 'react';
import {v4} from 'uuid';

const firstUser = {
  id: v4(),
  firstName: 'Itsuki',
  lastName: 'Yamada',
  city: 'Missoula',
  state: 'Montana',
  email: 'test@example.com',
  admin: false,
};

const User = () => {
  const [user, setUser] = useReducer(
      (user, newDetails) => ({...user, ...newDetails})
      , firstUser);
  return (
      <div>
        <h1>
          {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}
        </h1>
        <p>Email: {user.email}</p>
        <button
            onClick={() => {setUser({admin: true});}}
        >
          Make Admin
        </button>
      </div>
  );
};

export default User;