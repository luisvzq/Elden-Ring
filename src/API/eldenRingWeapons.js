import data from "../API/eldenRingWeaponsEsp.json";

const eldenRingWeapons = async () => {
  try {
    return data;
  } catch (error) {
    console.error("Error al obtener datos del archivo JSON:", error);
    throw error;
  }
};

export default eldenRingWeapons;
