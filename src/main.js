import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import './assets/styles/reset.styl'

const render = Component => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('@/App', () => render(App))
}

// // service worker
// if (window.location.protocol === 'https:' && navigator.serviceWorker) {
//   navigator.serviceWorker.register('/service-worker.js')
// }
