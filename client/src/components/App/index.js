import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

function App({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default App;

App.propTypes = {
  children: PropTypes.oneOfType(PropTypes.element, PropTypes.func),
};

App.defaultProps = {
  children: {},
};
