import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TravellersList from './TravellerysDelivery/TravellersList/'
class App extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {}
  state = {
    travellersDelivery: [
      {
        id: 1,
        usuario: {
          name: 'Paul Abelardo',
          apellido: 'Cuichan Ayo',
          cedula: '17281271827128',
          calificacion: {
            puntualidad: '10',
            promedioPuntuaciones: '10'
          },
          direccionResidencia: 'Quito, Pichincha',
          telefono: '0232433434',
          mobil: '219829328293832'
        },
        ciudadOrigen: 'Quito',
        fechaSalida: '2018/12/17',
        fechaRetorno: '2019/01/10',
        ruta: [
          {
            ciudad: 'Panama',
            fechaLlegada: '2018/12/18',
            fechaSalida: '2018/12/21'
          },
          {
            ciudad: 'Texas USA',
            fechaLlegada: '2018/12/22',
            fechaSalida: '2018/12/9'
          }
        ]
      },
      {
        id: 2,
        usuario: {
          name: 'Juan Carlos',
          apellido: 'Hinojosa Raza',
          cedula: '17282444323',
          calificacion: {
            puntualidad: '10',
            promedioPuntuaciones: '10'
          },
          direccionResidencia: 'Quito, Pichincha',
          telefono: '0232433434',
          mobil: '219829328293832'
        },
        ciudadOrigen: 'Quito2',
        fechaSalida: '2017/10/7',
        fechaRetorno: '2017/10/30',
        ruta: [
          {
            ciudad: 'Francia',
            fechaLlegada: '2017/10/8',
            fechaSalida: '2017/10/15'
          },
          {
            ciudad: 'Espania',
            fechaLlegada: '2018/12/16',
            fechaSalida: '2018/12/29'
          }
        ]
      }
    ]
  }
  constructor (...props) {
    super(...props)
    this.a = 0
  }
  render () {
    return (
      <TravellersList travellers={this.state.travellersDelivery} />
    )
  }
}
export default App
