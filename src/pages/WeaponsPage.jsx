import useFetchWeapons from "../hooks/useFetchWeapons.jsx";
import Weapons from "../components/Weapons.jsx";
import { SearchWeapons } from "../components/SearchWeapons.jsx";
import { useEffect } from "react";

const WeaponsPage = () => {
  const {
    page,
    nextPage,
    backPage,
    weapons,
    numPages,
    handleSearch,
    name,
    fetchWeapons,
  } = useFetchWeapons();

  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col items-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="font-extrabold text-5xl m-20">
        Lista de Armas de Elden Ring
      </h1>
      <SearchWeapons
        handleSearch={handleSearch}
        name={name}
        fetchWeapons={fetchWeapons}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 m-10">
        {weapons.length > 0 && <Weapons weapons={weapons} />}
        <div className="col-span-full flex justify-center">
          {page > 0 && (
            <button
              onClick={backPage}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
            >
              Back
            </button>
          )}
          {page < numPages && (
            <button
              onClick={nextPage}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeaponsPage;
