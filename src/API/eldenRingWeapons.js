const eldenRingWeapons = async (page, name = null) => {
  try {
    let url = `https://eldenring.fanapis.com/api/weapons?limit=30&page=${
      page ?? 0
    }`;
    if (name) {
      url += `&name=${encodeURIComponent(name)}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log("🚀 ~ eldenRingWeapons ~ data:", data);

    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
};

export default eldenRingWeapons;
