
import React from 'react'
import { render  } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import loginApp from './reducers'
import BillingBox from './components/BillingBox'

let store = createStore(loginApp);

let isAuthUser = "false";

render (
  <Provider store={store}>
    <BillingBox />
  </Provider>,
  document.getElementById('root')
)


