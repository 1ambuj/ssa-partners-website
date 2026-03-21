import React from "react";

const Search = ({ searchToggle, closeSearch }: any) => {
  return (
    <>
      <div
        className={
          (searchToggle ? " form-overlay-active" : " ") + " form-overlay"
        }
        onClick={closeSearch}
      ></div>
      <div
        className={(searchToggle ? " active" : " ") + " td-search-popup"}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
            onClick={(e: any) => e.preventDefault()}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
