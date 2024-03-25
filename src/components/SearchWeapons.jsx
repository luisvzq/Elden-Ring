import PropTypes from "prop-types";

const SearchWeapons = ({ handleSearch, name, fetchWeapons }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWeapons("0");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded-md p-2 mx-4 focus:outline-none focus:border-zinc-500"
        type="text"
        id="name"
        value={name}
        onChange={handleSearch}
        placeholder="Buscar arma"
      />
      <button
        type="submit"
        className=" bg-black hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>
    </form>
  );
};

SearchWeapons.propTypes = {
  handleSearch: PropTypes.func,
  name: PropTypes.string,
  fetchWeapons: PropTypes.func,
};

export { SearchWeapons };
