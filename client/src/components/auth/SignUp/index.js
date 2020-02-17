import React from 'react';
import { useDispatch } from 'react-redux';

import Form from '~/components/auth/SignUp/Form';
import { signUp } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(formData) {
    dispatch(signUp(formData));
  }

  return <Form onSubmit={handleSubmit} />;
}
