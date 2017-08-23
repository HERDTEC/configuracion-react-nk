import React from 'react'
const TravelNew = ( props ) => (
  <form onSubmit = { props.onAddTravel }>
    <input type = 'text' placeholder = 'Ciudad de Origen' name = 'ciudadOrigen' />
    <input type = 'date' placeholder = 'Fecha Salida' name = 'fechaSalida' />
    <input type = 'date' placeholder = 'Fecha de Retorno' name = 'fechaRetorno' />
    <input type = 'hidden' name = 'id' value = { Math.floor( Math.random() * 100 ) } />
    <input type = 'submit' value = 'Guardar' />
  </form>
)
export default TravelNew
