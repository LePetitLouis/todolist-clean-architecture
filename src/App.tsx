import { Suspense } from 'react'

import { store } from './store/store'
import { Provider } from 'react-redux'

import HomePage from './userinterface/pages/home/HomePage'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </Suspense>
  )
}

export default App