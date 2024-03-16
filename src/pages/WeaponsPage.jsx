import useFetchWeapons from "../hooks/useFetchWeapons.jsx";
import Weapons from "../components/Weapons.jsx";
import { SearchWeapons } from "../components/SearchWeapons.jsx";

const WeaponsPage = () => {
  const { nextPage, backPage, weapons, currentPage } = useFetchWeapons();

  return (
    <div className="m-20 flex-col">
      <h1 className="text-5xl m-10 flex justify-center">
        Lista de Armas de Elden Ring
      </h1>
      <SearchWeapons />
      <div className="grid grid-cols-6 m-10">
        {weapons.length > 0 && <Weapons weapons={weapons} />}
        <div>
          {currentPage > 0 && <button onClick={backPage}>Back</button>}
          {/* Aquí el botón "Next" siempre se mostrará ya que no está condicionado */}
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default WeaponsPage;
