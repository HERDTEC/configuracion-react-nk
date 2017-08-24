import React from 'react'
// eslint-disable-next-line
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom'
const Router = () => (
  <BrowserRouter>
    <div>
      <h1>Primeros pasos con react</h1>
      <nav>
        <ul>
          <li>
            <Link to = '/'>Home</Link>
          </li>
          <li>
            <Link to = '/acerca'>Acerca</Link>
          </li>
          <li>
            <Link to = '/servicios'>servicios</Link>
          </li>
          <li>
            <Link to = '/contacto'>contacto</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Route exact path = '/' component = { Home } />
      <Route path = '/acerca' component = { Acerca } />
      <Route path = '/servicios' component = { Servicios } />
      <Route path = '/contacto' component = { Contacto } />
    </div>
  </BrowserRouter>
)
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
const Acerca = () => (
  <div>
    <h1>Acerca</h1>
  </div>
)
const Servicios = () => (
  <div>
    <h1>Servicios</h1>
  </div>
)
const Contacto = () => (
  <div>
    <h1>Contacto</h1>
  </div>
)
export default Router
export {
  Router,
  Home,
  Servicios,
  Contacto,
  Acerca
}
