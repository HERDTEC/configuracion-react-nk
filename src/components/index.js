import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TravellersList from './TravellerysDelivery/TravellersList'
import TravelNew from './TravellerysDelivery/TravelNew/'
import uid from 'uid'
import { travellersDelivery } from './../data/travellersDelivery.json'
import moment from 'moment'
class App extends Component {
  static defaultProps = {
    id: uid( 10 ),
    hometown: 'defecto',
    returnDate: moment(),
    departureDate: moment()
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    hometown: PropTypes.string.isRequired,
    departureDate: PropTypes.instanceOf( moment ),
    returnDate: PropTypes.instanceOf( moment )
  }
  constructor ( ...props ) {
    super( ...props )
    this.handleOnAddTravel = this.handleOnAddTravel.bind( this )
    this.fetchData = this.fetchData.bind( this )
    this.resetData = this.resetData.bind( this )
    this.handleChangeDepartureDate = this.handleChangeDepartureDate.bind( this )
    this.handleChangeReturnDate = this.handleChangeReturnDate.bind( this )
  }
  state = {
    travellersDelivery: [],
    departureDate: null,
    returnDate: null
  }
  fetchData ( ) {
    setTimeout( () => this.setState( { travellersDelivery: travellersDelivery } ), 2000 )
  }
  resetData () {
    this.setState( { travellersDelivery: [] } )
  }
  componentDidMount () {
    this.fetchData()
    // this.handleChangeDepartureDate( moment() )
    // this.handleChangereturnDate( moment() )
  }
  handleChangeDepartureDate ( date ) {
    this.setState( {
      departureDate: date
    } )
  }
  handleChangeReturnDate ( date ) {
    this.setState( {
      returnDate: date
    } )
  }

  handleOnAddTravel ( e ) {
    e.preventDefault()
    console.log( e.target )
    let form = e.target,
      travel = {
        id: form.id.value,
        hometown: ( form.hometown.value ) ? form.hometown.value : App.defaultProps.hometown,
        departureDate: ( form.departureDate.value ) ? form.departureDate.value : App.defaultProps.departureDate,
        returnDate: ( form.returnDate.value ) ? form.returnDate.value : App.defaultProps.returnDate
      }
    console.log( travel )
    this.setState( {
      travellersDelivery: this.state.travellersDelivery.concat( [travel] )
    } )
  }
  render () {
    if ( !this.state.travellersDelivery.length ) {
      return (
        <div>
          <p>No hay viajeros</p>
          <button onClick = { this.fetchData }>Cargar Viajeros</button>
        </div>
      )
    } else {
      return (
        <div>
          <TravelNew
            onAddTravel = { this.handleOnAddTravel }
            departureDate = { this.state.departureDate }
            changeDeparturelDate = { this.handleChangeDepartureDate }
            returnDate = { this.state.returnDate }
            changeReturnDate = { this.handleChangeReturnDate }
          />
          <TravellersList
            travellers = { this.state.travellersDelivery }
          />
          <button onClick = { this.resetData }>Borrar Cursos</button>
        </div>
      )
    }
  }
}
export default App
