import { useState, useContext } from "react";
import SearchContext from "../../store/search-context";
import searchIcon from "../../assets/search.png";
import styles from "./Search.module.css";

const Search = () => {
  const searchCtx = useContext(SearchContext);
  const [searchState, setSearchState] = useState("");

  // Handles user search input and saves to state.
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchState(e.target.value);
  };

  return (
    <div className={styles["search-container"]}>
      <form
        onSubmit={(e) =>
          searchCtx.searchFormSubmitHandler(e, searchState, setSearchState)
        }
      >
        <input
          type="search"
          id="search"
          name="search"
          placeholder="City or Zip Code"
          value={searchState}
          onChange={searchHandler}
        />
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      <p>{searchCtx.error}</p>
    </div>
  );
};

export default Search;
