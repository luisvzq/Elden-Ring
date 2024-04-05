import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SelectCategoryWeapons({ handleSearch }) {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    handleSearch(event);
  };
  const handleSelectAll = () => {
    setCategory("");
    handleSearch({ target: { value: "" } });
  };

  return (
    <Box className="min-w-72 min-h-14 text-center">
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Tipo</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem onClick={handleSelectAll} value="">
            Todas
          </MenuItem>
          <MenuItem value={"Alabarda"}>Alabardas</MenuItem>
          <MenuItem value={"Antorcha"}>Antorchas</MenuItem>
          <MenuItem value={"Arco"}>Arcos</MenuItem>
          <MenuItem value={"Arco grande"}>Arcos grandes</MenuItem>
          <MenuItem value={"Arco ligero"}>Arcos ligeros</MenuItem>
          <MenuItem value={"Arma colosal"}>Armas colosales</MenuItem>
          <MenuItem value={"Balista"}>Balistas</MenuItem>
          <MenuItem value={"Ballesta"}>Ballestas</MenuItem>
          <MenuItem value={"Bastón de piedra refulgente"}>
            Bastones de piedra refulgente
          </MenuItem>
          <MenuItem value={"Daga"}>Dagas</MenuItem>
          <MenuItem value={"Espada colosal"}>Espadas colosales</MenuItem>
          <MenuItem value={"Espada curva"}>Espadas curvas</MenuItem>
          <MenuItem value={"Espada de embestida"}>
            Espadas de embestida
          </MenuItem>
          <MenuItem value={"Espada de embestida pesada"}>
            Espadas de embestida pesadas
          </MenuItem>
          <MenuItem value={"Espada recta"}>Espadas rectas</MenuItem>
          <MenuItem value={"Espadón"}>Espadones</MenuItem>
          <MenuItem value={"Espadón curvo"}>Espadones curvos</MenuItem>
          <MenuItem value={"Garras"}>Garras</MenuItem>
          <MenuItem value={"Gran hacha"}>Grandes hachas</MenuItem>
          <MenuItem value={"Gran martillo"}>Grandes martillos</MenuItem>
          <MenuItem value={"Guadaña"}>Guadañas</MenuItem>
          <MenuItem value={"Hacha"}>Hachas</MenuItem>
          <MenuItem value={"Hoja doble"}>Hojas dobles</MenuItem>
          <MenuItem value={"Katana"}>Katanas</MenuItem>
          <MenuItem value={"Lanza"}>Lanzas</MenuItem>
          <MenuItem value={"Lanza larga"}>Lanzas largas</MenuItem>
          <MenuItem value={"Látigo"}>Látigos</MenuItem>
          <MenuItem value={"Martillo"}>Martillos</MenuItem>
          <MenuItem value={"Mayal"}>Mayales</MenuItem>
          <MenuItem value={"Puños"}>Puños</MenuItem>
          <MenuItem value={"Sello sagrado"}>Sellos sagrados</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
SelectCategoryWeapons.propTypes = {
  handleSearch: PropTypes.func,
};
