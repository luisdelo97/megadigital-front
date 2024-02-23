import { useContext } from "react";
import Formulario from "../components/Formulario";
import Reserva from "../components/Reserva";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const { cerrarSesion } = useContext(AuthContext);
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start">
      <div className="absolute right-0 top-0">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={cerrarSesion}
        >
          Cerrar Sesion
        </button>
      </div>
      <div className={`mt-10 md:block md:w-1/2 lg:w-2/5`}>
        <Formulario />
      </div>
      <div className=" mt-8 md:w-1/2 lg:h-3/5">
        <Reserva />
      </div>
    </div>
  );
};

export default Home;
