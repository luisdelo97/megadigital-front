import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "./components/Alerta";
import clienteAxios from "./axios/clientAxios";
import AuthContext from "./context/AuthProvider";
import Spinner from "./components/Spinner";

function App() {
  const [nroDocumento, setNroDocumento] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const manejarAutenticacion = async (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    try {
      setSpinner(true);
      const { data } = await clienteAxios.post("/", {
        nrodocumento: nroDocumento,
      });
      // Redirigir al usuario a la URL indicada por el servidor
      localStorage.setItem("personaId", data.personaId);
      setSpinner(false);
      setAuth({ id: data.personaId });
      navigate(data.redirectUrl);
    } catch (error) {
      console.log("Error:", error.message);
      const errorMsg = error?.response?.data?.msg ?? "Error de conexion";
      setAlerta({ msg: errorMsg, error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      setSpinner(false);
    }
  };
  const { msg } = alerta;
  return (
    <form
      onSubmit={manejarAutenticacion}
      className="flex flex-col justify-center gap-4 items-center bg-slate-800 text-white h-lvh"
    >
      {spinner && <Spinner />}
      {msg && <Alerta alerta={alerta}></Alerta>}
      <label htmlFor="nroDocumento">Número de Documento:</label>
      <input
        type="text"
        id="nroDocumento"
        className="text-black"
        value={nroDocumento}
        onChange={(e) => setNroDocumento(e.target.value)}
      />
      <button className="bg-slate-400 p-2 rounded-md" type="submit">
        Ingresar
      </button>
      <nav className="mt-5 bg-slate-300 p-2 rounded-md lg:flex lg:justify-between">
        <Link className="block text-center text-gray-500" to="/registrar">
          Registrarse
        </Link>
      </nav>
    </form>
  );
}

export default App;
