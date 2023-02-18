import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      
      </section>
    </>
  );
};

export default Search;
