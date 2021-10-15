import SearchResultItem from './SearchResultItem'
import './SearchResults.css'

const SearchResults = ({ results }) => {
  return (
    <ul className="SearchResults">
      {results.map(result => (
        <SearchResultItem 
          key={result.title} 
          title={result.title}   
          symbol={result.symbol}
        />
      ))}
    </ul>
  )
}

export default SearchResults
