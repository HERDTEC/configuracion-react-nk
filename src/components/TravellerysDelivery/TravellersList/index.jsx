import React from 'react'
import TravelNew from './../TravelNew/'
import TravelInfo from './../TravelInfo/'
const TravellersList = (props) => (
  <div>
    <TravelNew/>
    <ul>
      {
        props.travellers.map(travel => (
          <TravelInfo
            key = {travel.id}
            id = {travel.id}
            usuario = {travel.usuario}
            ciudadOrigen = {travel.ciudadOrigen}
            fechaSalida = {travel.fechaSalida}
            fechaRetorno = {travel.fechaRetorno}
          />
        ))
      }
    </ul>
  </div>
)
export default TravellersList
