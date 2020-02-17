import reduxThunk from 'redux-thunk';

import createStore from '~/store/createStore';
import rootReducer from '~/store/modules/rootReducer';

const middlewares = [reduxThunk];

const store = createStore(rootReducer, middlewares);

export { store };
