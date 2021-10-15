import React, { useState } from 'react';

import Header from './Header'
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import searchEmoji from './search/searchEmoji';
import './App.css'

const MAX_SEARCH_RESULTS = 20

function App() {
  const [searchResults, setSearchResults] = useState(searchEmoji('', MAX_SEARCH_RESULTS))

  const handleSearchChange = searchText => {
    setSearchResults(searchEmoji(searchText, MAX_SEARCH_RESULTS))
  }

  return (
    <main className="App">
      <div className="App-container">
        <Header />
        <SearchInput onChangeText={handleSearchChange} />
        <SearchResults results={searchResults} />
      </div>
    </main>
  );
}

export default App;
