import SearchResults from "./SearchResults";
import searchIcon from "../../assets/search.png";
import styles from "./Search.module.css";

const Search = props => {
  // Returns list of cities that match users input
  const searchResults = () => {
    return props.searchResults.length > 0
      ? props.searchResults.map((result) => {
          return (
            <SearchResults
              result={result}
              key={result.lat + Math.random()}
              getWeatherResults={props.getWeatherResults}
            />
          );
        })
      : null;
  };

  return (
    <div className={styles["search-container"]}>
      <form onSubmit={props.searchFormSubmitHandler}>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="City or Zip Code"
          value={props.searchState}
          onChange={props.searchHandler}
        />
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      <ul>{props.showResults ? searchResults() : null}</ul>
    </div>
  );
};

export default Search;
