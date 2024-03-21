import PropTypes from "prop-types";

const SearchWeapons = ({ handleShearch, name, fetchWeapons }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWeapons("0");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        type="text"
        id="name"
        value={name}
        onChange={handleShearch}
        placeholder="Buscar arma"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>
    </form>
  );
};

SearchWeapons.propTypes = {
  handleShearch: PropTypes.func,
  name: PropTypes.string,
  fetchWeapons: PropTypes.func,
};

export { SearchWeapons };
