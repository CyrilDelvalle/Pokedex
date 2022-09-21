interface ISearchQuery {
  searchQuery: string;
  setSearchQuery: Function;
  isActivate: boolean;
}

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  isActivate,
}: ISearchQuery) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex items-stretch w-full mb-4 rounded">
          <input
            type="search"
            className={`form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 ${
              !isActivate ? "bg-white" : "bg-slate-600"
            } bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
            placeholder={!isActivate ? "Rechercher" : "Chargement"}
            disabled={isActivate}
            aria-label="Rechercher"
            value={searchQuery}
            onInput={(e) => {
              const { value } = e.target as HTMLTextAreaElement;
              setSearchQuery(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
