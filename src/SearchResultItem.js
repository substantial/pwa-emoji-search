import './SearchResultItem.css'

const SearchResultItem = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16)
  const imageSrc = `https://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  const copyToClipboard = () => {
    if (window.cordova && window.cordova.plugins.clipboard) {
      window.cordova.plugins.clipboard.copy({
        type: 'text',
        data: symbol,
      })
    } else if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(symbol)
    }
  }

  return (
    <li>
      <button className="SearchResultItem-button" onClick={copyToClipboard}>
        <img 
          className="SearchResultItem-image"
          src={imageSrc} 
          alt={title} 
          aria-hidden 
        />
        <span>{title}</span>
      </button>
    </li>
  )
}

export default SearchResultItem
