import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="text" component="input" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
          component="input"
        />
      </fieldset>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default reduxForm({ form: 'signForm' })(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

Form.defaultProps = {
  handleSubmit: null,
};
