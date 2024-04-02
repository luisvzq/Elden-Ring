import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons.js";

const useFetchWeapons = () => {
  let [, setSearchParams] = useSearchParams();
  const [weapons, setWeapons] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const weaponsPerPage = 30;

  const handleChange = (e) => {
    setPage(0);
    setName(e.target.value);
  };

  const fetchWeapons = useCallback(
    async (newPage) => {
      const dataWeapons = await eldenRingWeapons(newPage || page, name);
      setPage(newPage || page);
      setSearchParams({ name: name, page: newPage || page });

      if (dataWeapons?.length > 0) {
        const totalWeapons = dataWeapons.length;
        const startIndex = newPage * weaponsPerPage;
        let endIndex = startIndex + weaponsPerPage;

        if (newPage === numPages - 1) {
          endIndex = totalWeapons;
        }

        const weaponsOnPage = dataWeapons.slice(startIndex, endIndex);

        const filteredWeapons = weaponsOnPage.filter(
          (weapon) =>
            weapon.name &&
            weapon.name.toLowerCase().includes(name.toLowerCase())
        );

        filteredWeapons.forEach((weapon) => {
          weapon.image = weapon.image
            ? weapon.image
            : "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
        });

        setWeapons(filteredWeapons);

        const totalPages = Math.ceil(totalWeapons / weaponsPerPage);
        setNumPages(totalPages);
      } else {
        setWeapons([]);
        setNumPages(0);
      }
    },
    [page, name, numPages, setSearchParams]
  );

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
