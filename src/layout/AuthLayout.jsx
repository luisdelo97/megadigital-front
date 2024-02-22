import { Outlet } from "react-router-dom";
const AuthLayouts = () => {
  return (
    <>
      <main className="container  mt-12 grid place-items-center gap-10 p-5 bg-slate-800">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayouts;
