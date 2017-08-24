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
const CompContacto = () => (
  <div>
    <h2>Mantente en contacto </h2>
  </div>
)
const CompMail = () => (
  <div>
    <h2>sistemas@linkear.net </h2>
  </div>
)
const CompUbicacion = () => (
  <div>
    <h2>Quito</h2>
  </div>
)
const CompWww = () => (
  <div>
    <h2>ing.pc.com</h2>
  </div>
)
const CompContactoInfo = ( { match } ) => (
  <div>
    <h2>{ match.params.contactoInfo }</h2>
  </div>
)
const Contacto = ( { match } ) => (
  <div>
    <h1>Contacto</h1>
    <Route exact path = { `${ match.url }` } component = { CompContacto } />
    <ul>
      <li>
        <Link to = { `${ match.url }/email` }>Email</Link>
      </li>
      <li>
        <Link to = { `${ match.url }/ubicacion` }>Ubicacion</Link>
      </li>
      <li>
        <Link to = { `${ match.url }/miweb` }>miweb</Link>
      </li>
    </ul>
    <Route exact path = { `${ match.url }/:contactoInfo` } component = { CompContactoInfo } />
    <Route exact path = { `${ match.url }/email` } component = { CompMail } />
    <Route exact path = { `${ match.url }/ubicacion` } component = { CompUbicacion } />
    <Route exact path = { `${ match.url }/miweb` } component = { CompWww } />
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
