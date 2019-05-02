import React, { useCallback, useState, useEffect } from "react";

import { ButtonClick } from "../../theme/Button";

const Pagination = ({ maxPage, page, onPressEnter, prevPage, nextPage }) => {
  const [pagi, setPagi] = useState(page);

  useEffect(() => {
    setPagi(page)
  }, [page])

  const handleEnter = useCallback(e => {
    if (e.which === 13) {
      let value = parseInt(e.target.value)
      if (value >= 1 && value <= maxPage) {
        onPressEnter && onPressEnter(value);
      } else if (value > maxPage) {
        onPressEnter && onPressEnter(maxPage);
      } else if (value < 1) {
        onPressEnter && onPressEnter(1);
      }
    }
  });

  const handlePrevPage = useCallback(() => {
    if (page > 1) {
      prevPage && prevPage(page - 1);
    }
  });

  const handleNextPage = useCallback(() => {
    if (page < maxPage) {
      nextPage && nextPage(page + 1);
    }
  });

  return (
    <React.Fragment>
      <div className="pagination">
        {page > 1 && (
          <ButtonClick
            classes="prev"
            onClick={() => handlePrevPage()}
            title="Trang trước"
          />
        )}
        <div className="pageInfo">
          <span>Trang </span>
          <input
            value={pagi}
            onChange={e => setPagi(e.target.value)}
            type="number"
            min="1"
            max={maxPage}
            onKeyPress={e => handleEnter(e)}
            placeholder={page}
          />{" "}
          / {maxPage}
        </div>
        {page < maxPage && (
          <ButtonClick
            classes="next"
            onClick={() => handleNextPage()}
            title="Trang sau"
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
