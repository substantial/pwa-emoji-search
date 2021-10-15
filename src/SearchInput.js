import React, { useState } from 'react'

import './SearchInput.css'

const SearchInput = ({ onChangeText }) => {
  const [text, setText] = useState('')

  const handleChangeText = event => {
    const newText = event.target.value
    setText(newText)
    onChangeText(newText)
  }

  return (
    <div className="SearchInput">
      <input className="SearchInput-input"
        value={text} 
        onChange={handleChangeText} 
      />
    </div>
  )
}

export default SearchInput
