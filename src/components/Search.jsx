import SearImg from "../assets/search.png";
import "../styles/components.css";

function Search({ value, onChange }) {
  return (
    <div className="search-container">
      <button className="search-button" type="submit">
        <img src={SearImg} alt="Buscar" className="search-icon" />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
