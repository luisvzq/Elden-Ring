import PropTypes from "prop-types";

const SearchWeapons = ({ handleSearch, name }) => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   fetchWeapons("0");
  // };

  return (
    <form className="flex justify-center w-3/5">
      <input
        className="w-2/5 min-w-80 border border-gray-300 rounded-md px-4 py-2 mx-4 focus:outline-none focus:border-zinc-500 text-center"
        type="text"
        id="name"
        value={name}
        onChange={handleSearch}
        placeholder="Escribe aquí el nombre del arma"
      />
      {/* <button
        type="submit"
        className=" bg-black hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button> */}
    </form>
  );
};

SearchWeapons.propTypes = {
  handleSearch: PropTypes.func,
  name: PropTypes.string,
  fetchWeapons: PropTypes.func,
};

export { SearchWeapons };
