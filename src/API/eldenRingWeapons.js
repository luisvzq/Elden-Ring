// const eldenRingWeapons = async (page, name = null) => {
//   try {
//     let url = `https://eldenring.fanapis.com/api/weapons?limit=300&page=${
//       page ?? 0
//     }`;
//     if (name) {
//       url += `&name=${encodeURIComponent(name)}`;
//     }
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("🚀 ~ eldenRingWeapons ~ data:", data);

//     return data;
//   } catch (error) {
//     console.error("Error al obtener datos de la API:", error);
//     throw error;
//   }
// };

// export default eldenRingWeapons;
import data from "../API/eldenRingWeaponsEsp.json";

const eldenRingWeapons = async () => {
  try {
    console.log("🚀 ~ eldenRingWeapons ~ data:", data);

    return data;
  } catch (error) {
    console.error("Error al obtener datos del archivo JSON:", error);
    throw error;
  }
};

export default eldenRingWeapons;
