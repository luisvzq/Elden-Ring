import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons.js";
import _ from "lodash";

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
      const normalizedSearch = _.toLower(_.deburr(name));
      const filteredWeapons = dataWeapons.filter((weapon) => {
        const normalizedWeaponName = _.toLower(_.deburr(weapon.name));
        return normalizedWeaponName.includes(normalizedSearch);
      });

      filteredWeapons.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });

      const totalWeapons = filteredWeapons.length;
      const totalPages = Math.ceil(totalWeapons / weaponsPerPage);
      setNumPages(totalPages);

      const startIndex = page * weaponsPerPage;
      let endIndex = (page + 1) * weaponsPerPage;
      if (page === totalPages - 1) {
        endIndex = totalWeapons;
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
