// eslint-disable-next-line
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render( <App />, document.getElementById( 'root' ) )
registerServiceWorker()
