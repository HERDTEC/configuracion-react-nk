import React from 'react'
import uid from 'uid'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const TravelNew = ( props ) => (
  <form onSubmit = { props.onAddTravel }>
    <input type = 'text' placeholder = 'city de Origen' name = 'hometown' />
    <DatePicker
      dateFormat = 'DD/MM/YYYY'
      isClearable = { true }
      placeholderText = 'Fecha Salida'
      name = 'departureDate'
      selected = { props.departureDate }
      onChange = { props.changeDeparturelDate }
    />
    <DatePicker
      dateFormat = 'DD/MM/YYYY'
      isClearable = { true }
      placeholderText = 'Fecha de Retorno'
      name = 'returnDate'
      selected = { props.returnDate }
      onChange = { props.changeReturnDate }
    />
    <input type = 'hidden' name = 'id' value = { uid( 10 ) } />
    <input type = 'submit' value = 'Guardar' />
  </form>
)
export default TravelNew
