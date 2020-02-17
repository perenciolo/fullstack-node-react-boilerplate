import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { store } from '~/store';

import App from '~/components/App';
import Welcome from '~/components/Welcome';
import SignUp from '~/components/auth/SignUp';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
