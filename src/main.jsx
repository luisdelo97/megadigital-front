import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AuthLayouts from "./layout/AuthLayout.jsx";
import Registrar from "./pages/Registrar.jsx";
import RutaProtegida from "./layout/RutaProtegida.jsx";
import Home from "./pages/Home.jsx";
import { ReservaProvider } from "./context/ReservaProvider.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
// import Registrar from "./pages/Registrar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ReservaProvider>
        <Routes>
          <Route path="/" element={<AuthLayouts />}>
            <Route index element={<App />} />
            <Route path="registrar" element={<Registrar />} />
          </Route>
          <Route path="/home" element={<RutaProtegida />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ReservaProvider>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
