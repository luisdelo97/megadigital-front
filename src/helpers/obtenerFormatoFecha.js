const obtenerFormatoFecha = (dia = new Date()) => {
  if (!(dia instanceof Date)) {
    dia = new Date(dia);
  }
  // Calcular el desplazamiento horario respecto a UTC
  const desplazamiento = dia.getTimezoneOffset();
  // Crear un objeto de fecha basado en día e incluir ajuste de zonas horarias
  const fechaLocal = new Date(dia.getTime() - desplazamiento * 60000);
  // Convertir a formato ISO y tomar solo la fecha, excluyendo la hora
  return fechaLocal.toISOString().split("T")[0];
};

export default obtenerFormatoFecha;
