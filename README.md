# reactjs-debounce

> react package for debounce searching in reactjs

[![NPM](https://img.shields.io/npm/v/reactjs-debounce.svg)](https://www.npmjs.com/package/reactjs-debounce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-debounce
```

## Usage

```jsx
import React, { Component } from 'react'

import { DebounceSearch } from 'reactjs-debounce'

class Example extends Component {
  const handleDebounce = (value) => {
    console.log(value)
  }

  render() {
    return (
      <DebounceSearch
        searchText={"Search.."}
        onDebounce={handleDebounce}
      ></DebounceSearch>
    )
  }
}
```

## Apis

```
1) searchText (optional) - a default text that you want to apply for search
2) onDebounce - this will return a function that have debounce value as an argument parameter.
```

## Css

```
1) Create a class named `debounce-search`
2) Add all you css to this class to apply your design in textbox.
```

## License

MIT © [ketanbodarya](https://github.com/ketanbodarya) & [savaliyanidhi](https://github.com/savaliyanidhi) & [parth-gondaliya](https://github.com/parth-gondaliya)
