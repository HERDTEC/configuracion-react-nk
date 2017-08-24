import React from 'react'
import TravelInfo from './../TravelInfo/'
const TravellersList = props => (
  <ul>
    {
      props.travellers.map( travel => (
        <TravelInfo
          key = { travel.id }
          id = { travel.id }
          user = { travel.user }
          hometown = { travel.hometown }
          departureDate = { travel.departureDate }
          returnDate = { travel.returnDate }
        />
      ) )
    }
  </ul>
)
export default TravellersList
