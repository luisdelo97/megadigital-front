import { Outlet } from "react-router-dom";
const AuthLayouts = () => {
  return (
    <>
      <main className="grid place-items-center bg-slate-800">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayouts;
