import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import eldenRingWeapons from "../API/eldenRingWeapons";

const useFetchWeapons = () => {
  let [, setSearchParams] = useSearchParams();
  const [weapons, setWeapons] = useState([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  // const queryClient = useQueryClient();

  // const fetchWeapons = async (newPage, newName) => {
  //   const dataWeapons = useQuery({
  //     queryKey: [newPage || page, newName || name],
  //     queryFn: eldenRingWeapons(newPage || page, newName || name),
  //   });
  //   if (newPage) setPage(newPage);
  //   if (newName) setName(newName);

  //   setSearchParams({ name: newName || name, page: newPage || page });

  //   if (dataWeapons?.data?.length > 0) {
  //     dataWeapons?.data?.map((weapon) => {
  //       weapon.image = weapon.image
  //         ? weapon.image
  //         : "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
  //       return weapon;
  //     });
  //   }
  //   setWeapons(dataWeapons.data);
  //   setTotal(dataWeapons.total);
  // };

  const fetchWeapons = useCallback(
    async (newPage) => {
      const dataWeapons = await eldenRingWeapons(
        newPage || page,
        name // Usamos el término de búsqueda actualizado del estado
      );
      setPage(newPage || page);
      setSearchParams({ name: name, page: newPage || page });

      if (dataWeapons?.data?.length > 0) {
        dataWeapons.data.forEach((weapon) => {
          weapon.image = weapon.image
            ? weapon.image
            : "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
        });
      }
      setWeapons(dataWeapons.data);
      setTotal(dataWeapons.total);
    },
    [page, name, setSearchParams]
  );

  const nextPage = () => {
    fetchWeapons(page + 1);
  };

  const backPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    fetchWeapons(page);
  }, [page, fetchWeapons]);

  const numPages = Math.floor(total / 30);

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
