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
      <h1 className="font-extrabold text-5xl m-20 text-gray-200 bg-black p-4 text-center">
        Armas de Elden Ring
      </h1>
      <SearchWeapons
        handleSearch={handleSearch}
        name={name}
        fetchWeapons={fetchWeapons}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
        {weapons && weapons.length > 0 && <Weapons weapons={weapons} />}
        <div className="col-span-full flex justify-center">
          <div className="flex justify-between w-full max-w-xs">
            {page > 0 && (
              <button
                onClick={backPage}
                className="px-6 py-3 bg-black hover:bg-zinc-500 text-white rounded-md font-bold"
              >
                Back
              </button>
            )}
            {page < numPages && (
              <button
                onClick={nextPage}
                className={`px-6 py-3 bg-black hover:bg-zinc-500 text-white rounded-md font-bold  ${
                  page > 0 ? "" : "ml-auto"
                }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponsPage;
