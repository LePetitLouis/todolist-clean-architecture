import { Suspense } from 'react'

import { store } from './store/store'
import { Provider } from 'react-redux'

import TodoList from './userinterface/components/todos/TodoList/TodoList'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </Suspense>
  )
}

export default App