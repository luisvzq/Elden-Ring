import useFetchWeapons from "../hooks/useFetchWeapons.jsx";
import Weapons from "../components/Weapons.jsx";
import "../App.css";

const WeaponsPage = () => {
  const { nextPage, backPage, weapons } = useFetchWeapons();
  return (
    <div className="m-20 flex-col	">
      <h1 className="text-5xl m-10 flex justify-center">
        Lista de Armas de Elden Ring
      </h1>
      <div className="grid grid-cols-6 m-10 ">
        {weapons.length > 0 && <Weapons weapons={weapons} />}
        <div>
          <button onClick={backPage}>Back</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default WeaponsPage;
