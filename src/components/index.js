import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TravellersList from './TravellerysDelivery/TravellersList'
import TravelNew from './TravellerysDelivery/TravelNew/'
class App extends Component {
  static defaultProps = {
    ciudadOrigen: 'defecto',
    fechaSalida: '1/1/1',
    fechaRetorno: '1/1/1'
  }
  static propTypes = {
    ciudadOrigen: PropTypes.string.isRequired,
    fechaSalida: PropTypes.string.isRequired,
    fechaRetorno: PropTypes.string.isRequired
  }
  constructor ( ...props ) {
    super( ...props )
    this.handleOnAddTravel = this.handleOnAddTravel.bind( this )
  }
  state = {
    travellersDelivery: [
      {
        id: 0,
        usuario: {
          name: 'Juan Carlos',
          apellido: 'Hinojosa Raza',
          cedula: '17282444323',
          calificacion: {
            puntualidad: '10',
            promedioPuntuaciones: '10'
          }
        },
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
        ],
        ciudadOrigen: 'Quito2',
        fechaSalida: '2017/10/7',
        fechaRetorno: '2017/10/30'
      },
      {
        id: 1,
        usuario: {
          name: 'Juan Carlos',
          apellido: 'Hinojosa Raza',
          cedula: '17282444323',
          calificacion: {
            puntualidad: '10',
            promedioPuntuaciones: '10'
          }
        },
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
        ],
        ciudadOrigen: 'Guayaquil',
        fechaSalida: '2017/10/7',
        fechaRetorno: '2017/10/30'
      }
    ]
  }
  handleOnAddTravel ( e ) {
    // alert( 'Evento en react' )
    e.preventDefault()
    console.log( e.target )
    let form = e.target,
      travel = {
        id: form.id.value,
        ciudadOrigen: ( form.ciudadOrigen.value ) ? form.ciudadOrigen.value : App.defaultProps.ciudadOrigen,
        fechaSalida: ( form.fechaSalida.value ) ? form.fechaSalida.value : App.defaultProps.fechaSalida,
        fechaRetorno: ( form.fechaRetorno.value ) ? form.fechaRetorno.value : App.defaultProps.fechaRetorno
      }
    console.log( travel )
    this.setState( {
      travellersDelivery: this.state.travellersDelivery.concat( [travel] )
    } )
  }
  render () {
    return (
      <div>
        <TravelNew onAddTravel = { this.handleOnAddTravel } />
        <TravellersList travellers = { this.state.travellersDelivery } />
      </div>
    )
  }
}
export default App
