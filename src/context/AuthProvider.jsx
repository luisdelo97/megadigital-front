/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import clienteAxios from "../axios/clientAxios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarPersona = async () => {
      const personaId = localStorage.getItem("personaId");
      if (!personaId) {
        setCargando(false);
        return;
      }

      try {
        const { data } = await clienteAxios.get(
          `/home/persona?personaId=${personaId}`
        );
        setAuth(data);
      } catch (error) {
        console.log(error);
        setAuth({});
      }
      setCargando(false);
    };
    autenticarPersona();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("personaId");
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{
        cargando,
        setCargando,
        auth,
        setAuth,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
