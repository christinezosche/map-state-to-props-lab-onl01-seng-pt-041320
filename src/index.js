import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
<Provider store={store}> 
 <App />
 </Provider>,
  document.getElementById('root')
);
