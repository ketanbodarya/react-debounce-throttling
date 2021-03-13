import React, { useState } from 'react'

import { ExampleComponent, DebounceSearch } from 'reactjs-debounce'
import 'reactjs-debounce/dist/index.css'

const App = () => {
  // const [value, setValue] = useState('')

  const handleDebounce = (value) => {
    console.log(value)
  }

  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <DebounceSearch
        searchText={"Search.."}
        onDebounce={handleDebounce}
      ></DebounceSearch>
    </div>
  )
}

export default App
