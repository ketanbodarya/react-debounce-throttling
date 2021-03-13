import React, { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import styles from './styles.module.css'

function useDebounce(callback, delay) {
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  )
  return debouncedFn
}

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const DebounceSearch = ({ searchText, onDebounce }) => {
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')
  const debouncedSave = useDebounce(
    (nextValue) => setOutputValue(nextValue),
    300
  )

  useEffect(() => {
    debouncedSave(searchText)
    setInputValue(searchText)
  }, [searchText])

  useEffect(() => {
    onDebounce(outputValue)
  }, [outputValue])

  const handleChange = (event) => {
    const { value: nextValue } = event.target
    setInputValue(nextValue)
    debouncedSave(nextValue)
  }

  return (
    <input
      type='text'
      className='debounce-search'
      value={inputValue}
      onChange={handleChange}
    ></input>
  )
}
