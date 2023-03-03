import { useState, useEffect } from 'react'
import ShowAssets from './showAssets';

export const Search = ({ assets }) => {

    const [search, setSearch] = useState("");
  
    return(
      <div className="search-container">
        <div className="asset-search">
          <input
            type="text"
            placeholder={`Search Assets`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
         <ShowAssets assets={assets} />
  </div>
  
    )
  }

  export default Search;