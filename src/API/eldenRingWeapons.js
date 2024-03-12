const eldenRingWeapons = async (page) => {
  try {
    const response = await fetch(
      `https://eldenring.fanapis.com/api/weapons?limit=30&page=${page ?? 0}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
};
export default eldenRingWeapons;
