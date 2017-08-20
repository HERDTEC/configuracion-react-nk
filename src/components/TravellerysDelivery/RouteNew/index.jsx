import React, { Component } from 'react'
class TravellersList extends Component {
  render () {
    return (
      <form>
        <input type="text" placeholder="Ciudad " name="ciudad" />
        <input type="text" placeholder="Fecha Salida" name="fechaSalida" />
        <input type="date" placeholder="Fecha de Retorno" name="fechaRetorno" />
      </form>
    )
  }
}
export default TravellersList
