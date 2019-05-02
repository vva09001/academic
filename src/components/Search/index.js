import React, { useCallback, useState } from "react";
import icon from "../../assets/image/Search.svg";

const Search = ({ onKeyPressSearch, onClickSearch, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = useCallback(e => {
    if (e.which === 13) {
      onKeyPressSearch && onKeyPressSearch(searchQuery);
      setSearchQuery("");
    }
  });

  const handleClick = useCallback(e => {
    onClickSearch && onClickSearch(searchQuery);
    setSearchQuery("");
  });
  return (
    <React.Fragment>
      <div className="search">
        <img onClick={e => handleClick(e)} src={icon} alt="" />
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          onKeyPress={e => handleKeyPress(e)}
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
