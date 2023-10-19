import searchIcon from "../../assets/search.png";
import styles from "./Search.module.css";

const Search = props => {
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
    </div>
  );
};

export default Search;
