import PropTypes from "prop-types";
import "../App.css";

const customAttackNames = {
  Phy: "Físico",
  Mag: "Magia",
  Fire: "Fuego",
  Ligt: "Rayo",
  Holy: "Sagrado",
  Sor: "Encantamiento",
  Crit: "Crítico",
  Rng: "Rango",
};

const customAttributeNames = {
  Str: "Fuerza",
  Dex: "Destreza",
  Int: "Inteligencia",
  Fai: "Fe",
  Arc: "Arcano",
};

const customCategoryNames = {
  Axe: "Hacha",
  Bow: "Arco",
  Ballista: "Balista",
  Claw: "Garras",
  "Colossal Sword": "Espada colosal",
  Crossbow: "Ballesta",
  "Curved Greatsword": "Espadón curvo",
  "Curved Sword": "Espada curva",
  Dagger: "Daga",
  Fist: "Puños",
  Flail: "Mayal",
  "Glintstone Staff": "Bastón de piedra refulgente",
  Greataxe: "Gran hacha",
  Greatbow: "Arco grande",
  "Great Spear": "Lanza larga",
  Greatsword: "Espadón",
  Halberd: "Alabarda",
  Hammer: "Martillo",
  "Heavy Thrusting Sword": "Espada de embestida pesada",
  "Light Bow": "Arco ligero",
  Reaper: "Guadaña",
  "Sacred Seal": "Sello sagrado",
  Spear: "Lanza",
  "Straight Sword": "Espada recta",
  "Thrusting Sword": "Espada de embestida",
  Torch: "Antorcha",
  Twinblade: "Hoja doble",
  Warhammer: "Gran martillo",
  Whip: "Látigo",
};

const Weapons = ({ weapons }) => {
  return (
    <>
      {weapons.map((weapon) => {
        return (
          <div key={weapon.id} className="weapon border-solid	border-2">
            <h1 className="text-3xl flex justify-center m-8"> {weapon.name}</h1>
            <h2>{customCategoryNames[weapon.category]}</h2>
            <img
              className="flex justify-center m-8"
              src={
                weapon.image ??
                "https://cdn-icons-png.flaticon.com/512/5266/5266579.png"
              }
              alt={weapon.name}
            ></img>
            <div className="dmg-scaling-req">
              <div className="dmg">
                <h3 className="font-bold">Daño</h3>
                <div className="attack">
                  {weapon.attack
                    .filter((attack) => attack.amount > 0)
                    .map((attack) => (
                      <p key={attack.name}>
                        {customAttackNames[attack.name]}: {attack.amount}
                      </p>
                    ))}
                </div>
              </div>
              <div className="scaling">
                <h3 className="font-bold">Escalado</h3>
                <div className="scales-with">
                  {weapon.scalesWith.map((scaling) => (
                    <p key={scaling.name}>
                      {customAttributeNames[scaling.name]}: {scaling.scaling}
                    </p>
                  ))}
                </div>
                <h3 className="font-bold">Artibutos requeridos</h3>
                <div className="req">
                  {weapon.requiredAttributes.map((req) => (
                    <p key={req.name}>
                      {customAttributeNames[req.name]}: {req.amount}
                    </p>
                  ))}
                </div>
                <p>Peso: {weapon.weight}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

Weapons.propTypes = {
  weapons: PropTypes.array,
};
export default Weapons;
