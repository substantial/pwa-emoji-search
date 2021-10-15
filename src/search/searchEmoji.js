import emojiList from "./emojiList.json";

export default function searchEmoji(searchText, maxResults) {
  if (searchText && searchText.length > 0) {
    return emojiList
      .filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }

        if (emoji.keywords.includes(searchText)) {
          return true;
        }

        return false;
      })
      .slice(0, maxResults);
  }

  return emojiList.slice(0, maxResults)
}
