import React from 'react'
import TravelInfo from './../TravelInfo/'
const TravellersList = props => (
  <ul>
    {
      props.travellers.map( travel => (
        <TravelInfo
          key = { travel.id }
          id = { travel.id }
          usuario = { travel.usuario }
          ciudadOrigen = { travel.ciudadOrigen }
          fechaSalida = { travel.fechaSalida }
          fechaRetorno = { travel.fechaRetorno }
        />
      ) )
    }
  </ul>
)
export default TravellersList
