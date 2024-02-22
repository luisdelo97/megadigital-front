/* eslint-disable react/prop-types */

import { useContext } from "react";
import ReservaContext from "../context/ReservaProvider";

const CardReserva = ({ reserva }) => {
  const {
    fechaentrada,
    fechasalida,
    montoreserva,
    habitacionpiso,
    habitacionnro,
    cantcamas,
    tienetelevision,
    tienefrigobar,
    id,
  } = reserva;
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(
      nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()
    );
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  const { setEditarReserva, eliminarReserva } = useContext(ReservaContext);
  return (
    <div className="mx-5 my-10 text-xs bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold  uppercase text-indigo-700 my-2">
        Fecha entrada:
        <span className="font-normal normal-case text-black">
          {" "}
          {formatearFecha(fechaentrada)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha Salida:
        <span className="font-normal normal-case text-black">
          {" "}
          {formatearFecha(fechasalida)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Monto Reserva:
        <span className="font-normal normal-case text-black">
          {" "}
          {montoreserva}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Piso:
        <span className="font-normal normal-case text-black">
          {" "}
          {habitacionpiso}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Habitacion:
        <span className="font-normal normal-case text-black">
          {" "}
          {habitacionnro}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Cantidad Camas:
        <span className="font-normal normal-case text-black"> {cantcamas}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Cuenta con television:
        <span className="font-normal normal-case text-black">
          {" "}
          {tienetelevision ? "Si" : "No"}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Cuenta con Frigo bar:
        <span className="font-normal normal-case text-black">
          {" "}
          {tienefrigobar ? "Si" : "No"}
        </span>
      </p>

      <div className="flex justify-start gap-2 my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md uppercase font-bold"
          onClick={() => setEditarReserva(reserva)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white rounded-md uppercase font-bold"
          onClick={() => eliminarReserva(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardReserva;
