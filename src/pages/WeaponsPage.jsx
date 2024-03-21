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
    handleShearch,
    name,
    fetchWeapons,
  } = useFetchWeapons();

  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <div className="m-20 flex-col">
      <h1 className="text-5xl m-10 flex justify-center">
        Lista de Armas de Elden Ring
      </h1>
      <SearchWeapons
        handleShearch={handleShearch}
        name={name}
        fetchWeapons={fetchWeapons}
      />
      <div className="grid grid-cols-6 m-10">
        {weapons.length > 0 && <Weapons weapons={weapons} />}
        <div>
          {page !== 0 ? <button onClick={backPage}>Back</button> : null}
          {page < numPages && <button onClick={nextPage}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default WeaponsPage;
