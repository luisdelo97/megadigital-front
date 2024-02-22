import CardReserva from "./CardReserva";
import { useContext } from "react";
import ReservaContext from "../context/ReservaProvider";

const Reserva = () => {
  const { reservas } = useContext(ReservaContext);
  return (
    <>
      {reservas.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-5">Reservas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Reservas</span>
          </p>
          {reservas.map((reserva) => (
            <CardReserva key={reserva.id} reserva={reserva} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-5">
            No hay reservas
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza reservando una habitacion
            <span className="text-indigo-600 font-bold">
              {" "}
              y apareceran en este Lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default Reserva;
