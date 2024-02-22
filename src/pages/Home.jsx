import Formulario from "../components/Formulario";
import Reserva from "../components/Reserva";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
      <div className={` md:block md:w-1/2 lg:w-2/5`}>
        <Formulario />
      </div>
      <div className="md:w-1/2 lg:h-3/5">
        <Reserva />
      </div>
    </div>
  );
};

export default Home;
