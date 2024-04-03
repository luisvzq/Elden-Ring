import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons.js";

const useFetchWeapons = () => {
  let [, setSearchParams] = useSearchParams();
  const [weapons, setWeapons] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const weaponsPerPage = 32;

  const handleChange = (e) => {
    setPage(0);
    setName(e.target.value);
  };

  const fetchWeapons = useCallback(async () => {
    const dataWeapons = await eldenRingWeapons(page, name);
    if (dataWeapons?.length > 0) {
      const filteredWeapons = dataWeapons.filter(
        (weapon) =>
          weapon.name && weapon.name.toLowerCase().includes(name.toLowerCase())
      );
      const totalWeapons = filteredWeapons.length;
      const totalPages = Math.ceil(totalWeapons / weaponsPerPage);
      setNumPages(totalPages);

      const startIndex = page * weaponsPerPage;
      let endIndex = (page + 1) * weaponsPerPage;
      if (page === totalPages - 1) {
        endIndex = totalWeapons; // Última página muestra los restantes
      }

      const weaponsOnPage = filteredWeapons.slice(startIndex, endIndex);

      weaponsOnPage.forEach((weapon) => {
        weapon.image = weapon.image
          ? weapon.image
          : "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
      });

      setWeapons(weaponsOnPage);
    } else {
      setWeapons([]);
      setNumPages(0);
    }
    setSearchParams({ name: name, page: page });
  }, [page, name, setSearchParams]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const backPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    fetchWeapons(page);
  }, [page, fetchWeapons]);

  return {
    weapons,
    page,
    nextPage,
    backPage,
    numPages,
    handleSearch: handleChange,
    fetchWeapons,
  };
};

export default useFetchWeapons;
