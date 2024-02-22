import { useEffect, useState } from "react";
import convertirStrAFecha from "../helpers/convertirStrAFecha";
import obtenerFormatoFecha from "../helpers/obtenerFormatoFecha";

const useFechaEntradaSalida = ({
  fechaentrada,
  fechasalida,
  setFechaentrada,
}) => {
  const [minFechaSalida, setMinFechaSalida] = useState("");
  const [minFechaEntrada, setMinFechaEntrada] = useState("");
  const [maxFechaEntrada, setMaxFechaEntrada] = useState("");
  useEffect(() => {
    const hoy = new Date();
    const hoyFormato = obtenerFormatoFecha(hoy);
    setFechaentrada(hoyFormato);
    //minima entrada
    const manana = new Date(hoy);
    manana.setDate(manana.getDate() + 1);
    const mananaFormato = obtenerFormatoFecha(manana);
    setMinFechaEntrada(mananaFormato);
    //minima salida
    const pasado = new Date(hoy);
    pasado.setDate(pasado.getDate() + 2);
    const pasadoFormato = obtenerFormatoFecha(pasado);
    setMinFechaSalida(pasadoFormato);
  }, []);

  useEffect(() => {
    // Cada vez que cambie la fecha de salida, ajustar el máximo para la fecha de entrada
    if (fechasalida) {
      const formatoFecha = convertirStrAFecha(fechasalida);
      const diaAntesSalida = new Date(formatoFecha);
      diaAntesSalida.setDate(diaAntesSalida.getDate() - 1);
      const diaAntesFormato = obtenerFormatoFecha(diaAntesSalida);
      setMaxFechaEntrada(diaAntesFormato);
    }
  }, [fechasalida]);

  useEffect(() => {
    // Cada vez que cambie la fecha de entrada, ajustar el mínimo para la fecha de salida
    if (fechaentrada) {
      const formatoFecha = convertirStrAFecha(fechaentrada);
      const diaDespuesEntrada = new Date(formatoFecha);

      diaDespuesEntrada.setDate(diaDespuesEntrada.getDate() + 1);
      const diaDespuesFormato = obtenerFormatoFecha(diaDespuesEntrada);
      setMinFechaSalida(diaDespuesFormato);
    }
  }, [fechaentrada]);
  return [minFechaSalida, minFechaEntrada, maxFechaEntrada];
};

export default useFechaEntradaSalida;
