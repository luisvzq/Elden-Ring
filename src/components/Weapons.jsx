import PropTypes from "prop-types";

import {
  customAttackNames,
  customAttributeNames,
  customCategoryNames,
  customWeaponNames,
} from "../customData/customNames.js";
// import {
//   fixRequiredAttributes,
//   fixedWeapons,
// } from "../customData/fixedData.js";

const Weapons = ({ weapons }) => {
  // const fixRequiredAttributes = (requiredAttr) => {
  //   if (requiredAttr.name === "") {
  //     return { ...requiredAttr, name: "Fai" };
  //   }
  //   return requiredAttr;
  // };
  const weaponsWithCustomData = weapons.map((weapon) => {
    if (weapon.name === "Serpentbone Blade") {
      weapon.attack = [
        { name: "Phy", amount: 120 },
        { name: "Crit", amount: 100 },
      ];
    }
    if (weapon.name === "Beastman's Cleaver") {
      weapon.scalesWith = [{ name: "Str", scaling: "C" }];
    }
    if (weapon.name === "Monk's Flameblade") {
      weapon.scalesWith = [
        { name: "Str", scaling: "D" },
        { name: "Dex", scaling: "D" },
      ];
    }
    if (weapon.name === "Iron Ball") {
      weapon.scalesWith = [
        { name: "Str", scaling: "D" },
        { name: "Dex", scaling: "E" },
      ];
    }
    if (weapon.name === "Longhaft Axe") {
      weapon.scalesWith = [
        { name: "Str", scaling: "D" },
        { name: "Dex", scaling: "D" },
      ];
    }
    if (weapon.name === "Prince Of Death's Star") {
      weapon.scalesWith = [
        { name: "Str", scaling: "E" },
        { name: "Int", scaling: "D" },
        { name: "Fai", scaling: "D" },
      ];
    }
    if (weapon.name === "Iron Greatsword") {
      weapon.scalesWith = [
        { name: "Str", scaling: "C" },
        { name: "Dex", scaling: "E" },
      ];
    }
    if (weapon.name === "Curved Club") {
      weapon.scalesWith = [
        { name: "Str", scaling: "C" },
        { name: "Dex", scaling: "E" },
      ];
    }
    if (weapon.name === "Celebrant's Rib-rake") {
      weapon.scalesWith = [
        { name: "Str", scaling: "E" },
        { name: "Dex", scaling: "D" },
      ];
    }
    if (weapon.name === "Crystal Spear") {
      weapon.scalesWith = [
        { name: "Str", scaling: "E" },
        { name: "Dex", scaling: "D" },
        { name: "Int", scaling: "E" },
      ];
    }
    if (weapon.name === "Rotten Crystal Spear") {
      weapon.scalesWith = [
        { name: "Str", scaling: "E" },
        { name: "Dex", scaling: "D" },
        { name: "Int", scaling: "E" },
      ];
    }
    if (weapon.name === "Celebrant's Skull") {
      weapon.scalesWith = [
        { name: "Str", scaling: "D" },
        { name: "Dex", scaling: "D" },
      ];
    }
    if (weapon.name === "Celebrant's Cleaver") {
      weapon.scalesWith = [
        { name: "Str", scaling: "D" },
        { name: "Dex", scaling: "D" },
      ];
    }
    if (weapon.name === "Sword Of St Trina") {
      weapon.requiredAttributes = [
        { name: "Str", amount: 10 },
        { name: "Dex", amount: 12 },
        { name: "Int", amount: 14 },
      ];
    }
    if (weapon.name === "Sword Of Night And Flame") {
      weapon.requiredAttributes = [
        { name: "Str", amount: 12 },
        { name: "Dex", amount: 12 },
        { name: "Int", amount: 24 },
        { name: "Fai", amount: 24 },
      ];
    }
    if (weapon.name === "Treespear") {
      weapon.requiredAttributes = [
        { name: "Str", amount: 15 },
        { name: "Dex", amount: 22 },
        { name: "Fai", amount: 18 },
      ];
    }
    if (weapon.name === "Siluria's Tree") {
      weapon.requiredAttributes = [
        { name: "Str", amount: 27 },
        { name: "Dex", amount: 13 },
        { name: "Fai", amount: 20 },
      ];
    }
    if (weapon.name === "Gargoyle's Black Axe") {
      customCategoryNames[weapon.category] = "Gran Hacha";
    }

    return weapon;
  });
  return (
    <>
      {weaponsWithCustomData.map((weapon) => {
        // const correctedRequiredAttributes =
        //   weapon.requiredAttributes.map.filter((req) => req.amount !== 0);
        return (
          <div
            key={weapon.id}
            className="weapon font-sans bg-neutral-300 bg-opacity-60 rounded-xl shadow-2xl text-gray-900"
          >
            <div className="weapon-title flex items-center justify-center h-24 m-4 min-h-16">
              <h1 className="text-2xl flex justify-center  text-center">
                {" "}
                {customWeaponNames[weapon.name] || weapon.name}
              </h1>
            </div>
            <h2 className="text-right m-6">
              {customCategoryNames[weapon.category]}
            </h2>
            {/* <h2>{weapon.category}</h2> */}
            <img
              className="mx-auto my- max-w-full h-auto"
              src={
                weapon.image ??
                "https://cdn-icons-png.flaticon.com/512/5266/5266579.png"
              }
              alt={weapon.name}
            ></img>
            <div className="dmg-scaling-req text-center my-10">
              <div className="dmg min-h-32">
                <h3 className="font-bold">Daño</h3>
                {weapon.attack
                  .filter((attack) => attack.amount > 0)
                  .map((attack) => (
                    <p key={attack.name}>
                      {customAttackNames[attack.name]}: {attack.amount}
                    </p>
                  ))}
              </div>
              <div className="scaling  min-h-32">
                <h3 className="font-bold">Escalado</h3>
                <div className="scales-with">
                  {weapon.scalesWith.map((scaling) => (
                    <p key={scaling.name}>
                      {customAttributeNames[scaling.name]}
                      {scaling.scaling !== undefined && scaling.scaling !== "-"
                        ? `: ${scaling.scaling}`
                        : " Ninguno"}
                    </p>
                  ))}
                </div>
              </div>

              <div className="req min-h-32">
                <h3 className="font-bold">Artibutos requeridos</h3>
                {/* {weapon.requiredAttributes.map((req) => {
                    if (req.name && req.name !== "-") {
                      return (
                        <p key={req.name}>
                          {customAttributeNames[req.name]}: {req.amount}
                        </p>
                      );
                    } else {
                      return <p key={req.name}>Ninguno</p>;
                    }
                  })} */}
                {weapon.requiredAttributes.map((req, index) => {
                  return (
                    <p key={`${weapon.id}-${req.name}-${index}`}>
                      {customAttributeNames[req.name]}: {req.amount}
                    </p>
                  );
                })}
              </div>
              <div className="m-6 text-right">
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
