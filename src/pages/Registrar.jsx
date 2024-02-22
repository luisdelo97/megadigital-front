import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../axios/clientAxios";

const Registrar = () => {
  const [nombrecompleto, setNombrecompleto] = useState("");
  const [correo, setCorreo] = useState("");
  const [nrodocumento, setNrodocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Creando el usuario en la api
    try {
      await clienteAxios.post("/registrar", {
        nombrecompleto,
        correo,
        nrodocumento,
        telefono,
      });
      setAlerta({
        msg: "Creado correctamente, inicia sesion",
        error: false,
      });
      //Estas lineas hacen reset de los campos una vez se accione y se cree el usuario
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      setNombrecompleto("");
      setCorreo("");
      setNrodocumento("");
      setTelefono("");
      // console.log(respuesta);
    } catch (error) {
      console.log(error);
      setAlerta({ msg: error.response.data.msg, error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="min-w-full bg-slate-700">
        <div className="mx-10">
          <div>
            <h1 className="text-white font-black text-5xl ">
              Registrate
              <span className="text-blue-400"> abajo</span>
            </h1>
          </div>
          <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {/* si existe el mensaje muestra la alerta */}
            {msg && <Alerta alerta={alerta} />}
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-md font-bold"
                  htmlFor=""
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={nombrecompleto}
                  onChange={(e) => setNombrecompleto(e.target.value)}
                />
              </div>
              {/* Email */}
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-md font-bold"
                  htmlFor=""
                >
                  Correo
                </label>
                <input
                  type="email"
                  placeholder="ldelorenzi@fiuna.edu.py"
                  required
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              {/* Password */}
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-md font-bold"
                  htmlFor=""
                >
                  Cedula
                </label>
                <div className="relative mt-3">
                  <input
                    type="text"
                    placeholder="5197178"
                    required
                    className="p-3 border bg-gray-50 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                    value={nrodocumento}
                    onChange={(e) => setNrodocumento(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-md font-bold"
                  htmlFor=""
                >
                  Telefono
                </label>
                <div className="relative mt-3">
                  <input
                    type="text"
                    placeholder="0981541327"
                    required
                    className="p-3 border bg-gray-50 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit */}
              <input
                type="submit"
                className="bg-indigo-700 w-full text-white py-3 px-10 rounded-xl font-bold uppercase mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
                value="Registrar"
              />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className="block text-center my-5 text-gray-500" to="/">
                Ya te registraste? ingresa aqui!
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrar;
