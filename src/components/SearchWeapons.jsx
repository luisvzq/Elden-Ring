import PropTypes from "prop-types";

const SearchWeapons = ({ handleSearch, name }) => {
  return (
    <form className="flex justify-center min-w-72 min-h-14">
      <input
        className="w-72 border border-gray-300 rounded-md px-4 py-2 mx-4 focus:outline-none focus:border-zinc-500 text-center"
        type="text"
        id="name"
        value={name}
        onChange={handleSearch}
        placeholder="Escribe aquí el nombre del arma"
      />
    </form>
  );
};

SearchWeapons.propTypes = {
  handleSearch: PropTypes.func,
  name: PropTypes.string,
};

export { SearchWeapons };
