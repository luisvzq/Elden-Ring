import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchWeapons = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchParams.set("name", searchValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getWeaponFetch = async () => {
      try {
        const queryParams = searchParams.toString();

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/weapons?${queryParams}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }

        const body = await res.json();
        console.log(body);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    getWeaponFetch();
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        type="text"
        id="name"
        value={searchValue}
        onChange={handleChange}
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

export { SearchWeapons };
