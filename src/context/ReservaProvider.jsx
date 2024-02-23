/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import clienteAxios from "../axios/clientAxios";
const ReservaContext = createContext();

const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);
  const [editarReserva, setEditarReserva] = useState({});

  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const personaId = localStorage.getItem("personaId");
        if (!personaId) return;

        const reservasObtenidas = await clienteAxios.get(
          `/home/reserva?personaId=${personaId}`
        );
        setReservas(reservasObtenidas.data);
      } catch (error) {
        console.log(error.response.data.msg);
        setReservas([]);
      }
    };
    obtenerReservas();
  }, []);

  const eliminarReserva = async (id) => {
    const confirmar = confirm("Confirma que deseas eliminar el paciente?");

    if (confirmar) {
      try {
        await clienteAxios.delete(`/home/reserva/${id}`);

        const reservasActualizado = reservas.filter(
          (reserva) => reserva.id !== id
        );

        setReservas(reservasActualizado);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const guardarReserva = async (reserva) => {
    const {
      habitacionpiso,
      habitacionnro,
      cantcamas,
      tienetelevision,
      tienefrigobar,
      // fechaentrada,
      // fechasalida,
      // reservaId
    } = reserva;
    if (reserva?.reservaId) {
      const {
        data: { nuevaReserva, nuevaHabitacion },
      } = await clienteAxios.put(`/home/reserva/${reserva.reservaId}`, reserva);

      const nuevoRegistro = { ...nuevaHabitacion, ...nuevaReserva };
      const reservasActualizado = reservas.map((reserva) =>
        reserva.reservaId === nuevoRegistro.id ? nuevoRegistro : reserva
      );

      setReservas(reservasActualizado);
    } else {
      const { data } = await clienteAxios.post("/home/reserva", reserva);
      console.log(data.nuevaReserva);
      setReservas([
        {
          ...data.nuevaReserva,
          habitacionpiso,
          habitacionnro,
          cantcamas,
          tienetelevision,
          tienefrigobar,
        },
        ...reservas,
      ]);
    }
  };

  return (
    <ReservaContext.Provider
      value={{
        reservas,
        eliminarReserva,
        editarReserva,
        setEditarReserva,
        guardarReserva,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};
export default ReservaContext;
export { ReservaProvider };
