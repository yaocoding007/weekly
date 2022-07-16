import { useReducer } from 'react'

import { GlobalContext, initialState, reducer } from './store'

import Child from './child'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Child />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
