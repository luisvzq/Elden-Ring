import { useEffect } from "react";
import useFetchWeapons from "../hooks/useFetchWeapons";
import Weapons from "../components/Weapons";
import { SearchWeapons } from "../components/SearchWeapons";
import SelectCategoryWeapons from "../components/SelectCategoryWeapons";

const WeaponsPage = () => {
  const {
    page,
    nextPage,
    backPage,
    weapons,
    numPages,
    handleSearchName,
    handleSearchCategory,
    name,
    fetchWeapons,
  } = useFetchWeapons();

  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "auto",
      }}
    >
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
        <div className="flex justify-between">
          <SearchWeapons
            handleSearch={handleSearchName}
            name={name}
            fetchWeapons={fetchWeapons}
          />
          <SelectCategoryWeapons handleSearch={handleSearchCategory} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 m-10">
          {weapons.length > 0 ? (
            <Weapons weapons={weapons} />
          ) : (
            <div className="col-span-full flex justify-center items-center">
              <p className="text-2xl font-extrabold text-center">
                No hay resultados
              </p>
            </div>
          )}
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
              {page < numPages - 1 && (
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
    </div>
  );
};

export default WeaponsPage;
