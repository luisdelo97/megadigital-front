import { useContext, useEffect, useState } from "react";
import Alerta from "./Alerta";
import useFechaEntradaSalida from "../hooks/useFechaEntradaSalida";
import ReservaContext from "../context/ReservaProvider";

const Formulario = () => {
  const [habitacionpiso, setHabitacionpiso] = useState(1);
  const [habitacionnro, setHabitacionnro] = useState(1);
  const [cantcamas, setCantcamas] = useState(1);
  const [tienetelevision, setTienetelevision] = useState(true);
  const [tienefrigobar, setTienefrigobar] = useState(true);

  const [fechaentrada, setFechaentrada] = useState("");
  const [fechasalida, setFechasalida] = useState("");
  const [reservaId, setReservaId] = useState(null);

  const [alerta, setAlerta] = useState({});

  const { editarReserva, guardarReserva } = useContext(ReservaContext);
  useEffect(() => {
    if (editarReserva?.id) {
      setHabitacionpiso(editarReserva.habitacionpiso);
      setHabitacionnro(editarReserva.habitacionnro);
      setCantcamas(editarReserva.cantcamas);
      setTienetelevision(editarReserva.tienetelevision);
      setTienefrigobar(editarReserva.tienefrigobar);
      setFechaentrada(editarReserva.fechaentrada);
      setFechasalida(editarReserva.fechasalida);
      setReservaId(editarReserva.id);
    }
  }, [editarReserva]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      guardarReserva({
        habitacionpiso,
        habitacionnro,
        cantcamas,
        tienetelevision,
        tienefrigobar,
        fechaentrada,
        fechasalida,
        personaId: localStorage.getItem("personaId"),
        reservaId,
      });
      setAlerta({
        msg: "Reserva exitosa",
        error: false,
      });
      //Estas lineas hacen reset de los campos una vez se accione y se cree el usuario
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      setHabitacionpiso(1);
      setHabitacionnro(1);
      setCantcamas(1);
      setTienetelevision(true);
      setTienefrigobar(true);
      setFechaentrada("");
      setFechasalida("");
      setReservaId(null);
    } catch (error) {
      console.log(error);
      setAlerta({ msg: error.response.data.msg, error: true });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    }
  };

  const [minFechaSalida, minFechaEntrada, maxFechaEntrada] =
    useFechaEntradaSalida({
      fechaentrada,
      fechasalida,
      setFechaentrada,
    });

  const { msg } = alerta;
  return (
    <>
      <h2 className="font-black text-3xl text-center">Reserva de hospedaje</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Realizalo
        <span className="text-indigo-600 font-bold"> aqui abajo!</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md"
      >
        <div className="mb-5">
          <label htmlFor="mascota" className="text-gray-700 uppercase">
            Piso
          </label>
          <input
            type="number"
            min={1}
            max={10}
            id="habitacionpiso"
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={habitacionpiso}
            onChange={(e) => setHabitacionpiso(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="text-gray-700 uppercase">
            Nro Habitacion
          </label>
          <input
            type="number"
            min={1}
            max={20}
            id="habitacionnro"
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={habitacionnro}
            onChange={(e) => setHabitacionnro(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="cantcamas" className="text-gray-700 uppercase">
            Cant Camas
          </label>
          <input
            type="number"
            id="cantcamas"
            min={1}
            max={4}
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={cantcamas}
            onChange={(e) => setCantcamas(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tienetelevision" className="text-gray-700 uppercase">
            Tiene television
          </label>
          <select
            id="tienetelevision"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tienetelevision.toString()}
            onChange={(e) => setTienetelevision(e.target.value === "true")}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="tienefrigobar" className="text-gray-700 uppercase">
            Tiene frigobar
          </label>
          <select
            id="tieneefrigobar"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-gray-700 uppercase"
            value={tienefrigobar.toString()}
            onChange={(e) => setTienefrigobar(e.target.value === "true")}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="fechaentrada" className="text-gray-700 uppercase">
            Fecha de Entrada
          </label>
          <input
            type="date"
            id="fechaentrada"
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaentrada}
            min={minFechaEntrada}
            max={maxFechaEntrada}
            onChange={(e) => setFechaentrada(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fechasalida" className="text-gray-700 uppercase">
            Fecha de Salida
          </label>
          <input
            type="date"
            id="fechasalida"
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechasalida}
            min={minFechaSalida}
            onChange={(e) => setFechasalida(e.target.value)}
          />
        </div>
        {msg && <Alerta alerta={alerta} />}
        <input
          type="submit"
          className="bg-indigo-600 font-bold text-white p-3 mt-3 uppercase w-full  hover:bg-indigo-800 cursor-pointer transition-colors"
          value={reservaId ? "Guardar Cambios" : "Reservar"}
        />
      </form>
    </>
  );
};

export default Formulario;
