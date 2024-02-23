import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import Spinner from "../components/Spinner";

const RutaProtegida = () => {
  const { cargando, auth } = useContext(AuthContext);

  if (cargando) {
    return <Spinner />;
  }

  return (
    <>
      {auth?.id ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
