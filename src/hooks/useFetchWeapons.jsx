import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons.js";
import _ from "lodash";

const useFetchWeapons = () => {
  let [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [weapons, setWeapons] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const weaponsPerPage = 32;

  const handleChangeCategory = (e) => {
    setPage(0);
    setCategory(e.target.value);
    setSearchParams({ name: name, category: e.target.value, page: 0 });
  };

  const handleChangeName = (e) => {
    setPage(0);
    setName(e.target.value);
    setSearchParams({ name: e.target.value, category: category, page: 0 });
  };

  const fetchWeapons = useCallback(async () => {
    const dataWeapons = await eldenRingWeapons(page, name);
    if (dataWeapons?.length > 0) {
      const normalizedSearch = _.toLower(_.deburr(name));
      const filteredWeapons = dataWeapons.filter((weapon) => {
        const normalizedWeaponName = _.toLower(_.deburr(weapon.name));
        return normalizedWeaponName.includes(normalizedSearch);
      });

      const filteredWeaponsByCategory = category
        ? filteredWeapons.filter((weapon) => weapon.category === category)
        : filteredWeapons;

      filteredWeaponsByCategory.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });

      const totalWeapons = filteredWeaponsByCategory.length;
      const totalPages = Math.ceil(totalWeapons / weaponsPerPage);
      setNumPages(totalPages);

      const startIndex = page * weaponsPerPage;
      let endIndex = (page + 1) * weaponsPerPage;
      if (page === totalPages - 1) {
        endIndex = totalWeapons;
      }

      const weaponsOnPage = filteredWeaponsByCategory.slice(
        startIndex,
        endIndex
      );

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
  }, [page, name, category]);
  const nextPage = () => {
    setPage(page + 1);
    setSearchParams({ name: name, category: category, page: page + 1 });
  };

  const backPage = () => {
    if (page > 0) {
      setPage(page - 1);
      setSearchParams({ name: name, category: category, page: page - 1 });
    }
  };
  useEffect(() => {
    setSearchParams({ name: name, category: category, page: page });
  }, [name, category, page]);

  useEffect(() => {
    fetchWeapons();
  }, [page, fetchWeapons]);

  useEffect(() => {
    const resetURL = () => {
      navigate(window.location.pathname);
    };

    resetURL();

    return () => {
      window.removeEventListener("beforeunload", resetURL);
    };
  }, [navigate]);

  return {
    weapons,
    page,
    nextPage,
    backPage,
    numPages,
    handleSearchName: handleChangeName,
    handleSearchCategory: handleChangeCategory,
    fetchWeapons,
  };
};

export default useFetchWeapons;
