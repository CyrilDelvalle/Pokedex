import { useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex items-stretch w-full mb-4 rounded">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Rechercher"
            aria-label="Rechercher"
            aria-describedby="button-addon2"
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
