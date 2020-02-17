import axios from 'axios';

import { AUTH_USER } from './actionTypes';

export const signUp = ({ email, password }) => async dispatch => {
  const response = await axios.post('http://localhost:3090/signup', {
    email,
    password,
  });

  console.log(response);

  // dispatch({
  //   type: AUTH_USER,
  //   payload: {},
  // });
};
