// eslint-disable-next-line
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import App from './components/'
import Router from './components/router'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
// ReactDOM.render( <App />, document.getElementById( 'root' ) )
ReactDOM.render( <Router />, document.getElementById( 'root' ) )
registerServiceWorker()
