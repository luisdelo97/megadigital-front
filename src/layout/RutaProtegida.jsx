import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

// import { useState } from "react";

const RutaProtegida = () => {
  // const { auth, setAuth } = useState({ _id: 1 });

  // if (cargando) return "cargando...";

  return (
    <>
      <main className="container mx-auto mt-10">
        <Outlet />
      </main>
      {/* {auth?._id ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )} */}
    </>
  );
};

export default RutaProtegida;
