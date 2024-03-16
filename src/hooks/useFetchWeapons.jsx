import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons";

const useFetchWeapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [page, setPage] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  useEffect(() => {
    const fetchWeapons = async () => {
      const dataWeapons = await eldenRingWeapons(page, name);
      setWeapons(dataWeapons.data);
    };

    fetchWeapons();
  }, [page, name, location.search]);

  useEffect(() => {
    if (weapons.length > 0) {
      weapons.map((weapon) => {
        weapon.image = weapon.image
          ? weapon.image
          : "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
        return weapon;
      });
    }
  }, [weapons]);

  const nextPage = () => {
    if (page < 10) setPage(page + 1);
  };
  const backPage = () => {
    if (!(page <= 0)) setPage(page - 1);
  };

  return {
    weapons,
    nextPage,
    backPage,
  };
};
export default useFetchWeapons;
