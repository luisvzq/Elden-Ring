import PropTypes from "prop-types";

const Weapons = ({ weapons }) => {
  return (
    <>
      {Array.isArray(weapons) && weapons.length > 0 ? (
        weapons.map((weapon) => (
          <div
            key={weapon.id}
            className="weapon font-sans bg-neutral-300 bg-opacity-60 rounded-xl shadow-2xl text-gray-900 p-8"
            style={{ width: "300px", fontSize: "1.2rem" }}
          >
            <div className="weapon-title flex items-center justify-center h-24 m-4 min-h-16">
              <h1 className="text-2xl flex justify-center  text-center">
                {" "}
                {weapon.name}
              </h1>
            </div>
            <h2 className="text-right m-6">{weapon.category}</h2>
            <img
              className="mx-auto my- max-w-full h-auto"
              style={{ width: "200px", height: "200px" }}
              src={
                weapon.image ??
                "https://cdn-icons-png.flaticon.com/512/5266/5266579.png"
              }
              alt={weapon.name}
            ></img>
            <div className="dmg-scaling-req text-center my-10">
              <div className="dmg min-h-48">
                <h3 className="font-bold">Daño</h3>
                {weapon.attack
                  .filter((attack) => attack.amount > 0)
                  .map((attack) => (
                    <p key={attack.name}>
                      {attack.name}: {attack.amount}
                    </p>
                  ))}
              </div>
              <div className="scaling  min-h-48">
                <h3 className="font-bold">Escalado</h3>
                <div className="scales-with">
                  {weapon.scalesWith.map((scaling, index) => (
                    <p key={index}>
                      {scaling.name && scaling.scaling
                        ? `${scaling.name}: ${scaling.scaling}`
                        : "Ninguno"}
                    </p>
                  ))}
                </div>
              </div>

              <div className="req min-h-48">
                <h3 className="font-bold">Atributos requeridos</h3>
                {weapon.requiredAttributes.map((req, index) => (
                  <p key={`${weapon.id}-${req.name}-${index}`}>
                    {req.name
                      ? `${req.name}: ${req.amount || "Ninguno"}`
                      : "Ninguno"}
                  </p>
                ))}
              </div>

              <div className="m-6 text-right">
                <p>Peso: {weapon.weight}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron armas.</p>
      )}
    </>
  );
};

Weapons.propTypes = {
  weapons: PropTypes.array,
};

export default Weapons;
