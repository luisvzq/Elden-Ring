import PropTypes from "prop-types";

import {
  customAttackNames,
  customAttributeNames,
  customCategoryNames,
} from "../customData/customNames.js";

const Weapons = ({ weapons }) => {
  const fixRequiredAttributes = (requiredAttr) => {
    if (requiredAttr.name === "") {
      return { ...requiredAttr, name: "Fai" };
    }
    return requiredAttr;
  };
  return (
    <>
      {weapons.map((weapon) => {
        const correctedRequiredAttributes = weapon.requiredAttributes
          .map(fixRequiredAttributes)
          .filter((req) => req.amount !== 0);
        return (
          <div key={weapon.id} className="weapon border-solid	border-2">
            <h1 className="text-3xl flex justify-center m-8 text-center">
              {" "}
              {weapon.name}
            </h1>
            <h2 className="text-right">
              {customCategoryNames[weapon.category]}
            </h2>
            {/* <h2>{weapon.category}</h2> */}
            <img
              className="flex justify-center m-8"
              src={
                weapon.image ??
                "https://cdn-icons-png.flaticon.com/512/5266/5266579.png"
              }
              alt={weapon.name}
            ></img>
            <div className="dmg-scaling-req text-center">
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
                      {customAttributeNames[scaling.name]}
                      {scaling.scaling !== undefined && scaling.scaling !== "-"
                        ? `: ${scaling.scaling}`
                        : " Ninguno"}
                    </p>
                  ))}
                </div>

                <h3 className="font-bold">Artibutos requeridos</h3>
                <div className="req">
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
                  {correctedRequiredAttributes.map((req, index) => {
                    return (
                      <p key={`${weapon.id}-${req.name}-${index}`}>
                        {customAttributeNames[req.name]}: {req.amount}
                      </p>
                    );
                  })}
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
