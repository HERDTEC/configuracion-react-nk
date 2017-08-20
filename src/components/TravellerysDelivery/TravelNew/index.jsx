import React from 'react'
import RouteNew from './../RouteNew/'
const TravelNew = () => (
  <form>
    <input type="text" placeholder="Ciudad de Origen" name="ciudadOrigen" />
    <input type="text" placeholder="Fecha Salida" name="fechaSalida" />
    <input type="date" placeholder="Fecha de Retorno" name="fechaRetorno" />
    <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
    <RouteNew/>
    <input type="submit" value="Guardar" />
  </form>
)
export default TravelNew
