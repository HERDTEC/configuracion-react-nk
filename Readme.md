# NKrgo Web
## Buenas Practicas
* `Separar desde el inicio los componentes con estado y sin estado`
* `Hacer componente mas pequenios`
* `En la medida de lo posible tener pocos componentes con estado por el tema de renderizacion por cambio de estado`
* `Hacer el autobiding`
* `Los eventos se nombran con camelCase`

## Creacion de proyecto
1. Instalar generador de codigo oficial

   `yarn global add create-react-app `

2. Crear un proyecto react

   `create-react-app myapp`
3. Instalar stage 2
```
....
...
..
```
4. Instalacion de eslint
   `yarn eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard --dev`
   * Archivo .eslintrc
     ```
      {  
          "env": {
              "browser": true,
              "es6": true
          },

          "extends": ["standard", "react-app"],
          "parserOptions": {
              "sourceType": "module",
              "ecmaFeatures": {
                  "experimentalObjectRestSpread": true,
                  "jsx": true
              }
          },
          "plugins": [
              "react"
          ]
      }
     ```
     * Archivo .eslintignore
     ```
     src/registerServiceWorker.js
     ```

## Herramientas complementarias
### Plugins Browser
1. React Developer Tools
Herramienta oficial de facebook para trabajar con react

2. React Detector
Herramienta que me permite detectar si una web fue creada con react


3. Show me the react
Muestra que componentes estan hechos directamente en pantalla

### Plugins Visual Studio Code
3. Eslint
Cuando se configura con eslint el proyecto, visual studio code marca el codigo que no cumpla con las reglas que se especifiquen en el archivo .eslintrc



## Tecnologias
### Que es React
Libreria orientada al disenio de interfaces de usuario el cual permite la rendizacion inmediata.

### Ventajas
* Facilita el desarrollo de Single page Application(SPA's).

* Gran rendimiento.

* Gestiona el dom de una manera optima, para la actualizacion automatica.

* Permite crear aplicaciones web complejas que utilizan un gran intercambio de datos

* Libreria basa en componentes 

* Comunidad creciente



### Componente
Es una pieza de código que se dedica a resolver una tarea

#### Partes de un componente
* Renderizacion ---> render()

  Método que se encarga de renderizar en el navegador el HTML correspondiente al componente.

  Para especificar el HTML dentro de este metodo usamos JSX

* Propiedades ---> props()

  Son informacion externa para definir aspectos del componete y permiten pasar datos de un componente superior a uno inferior.
  + PropTypes: 
    Permiten definir el tipo de dato de mis propiedades
    
    Entre los tipos de datos que pueden tomar mis propiedades estan:
    
    + **Primitivos**
      + PropTypes.array
      + PropTypes.bool
      + PropTypes.func
      + PropTypes.number
      + PropTypes.object
      + PropTypes.string

    + **Combinados**
      + PropTypes.onOfType (aregglo de varios tipos)
      + PropTypes.arrayOf (arreglo de cierto tipo)
      + PropTypes.objectOf (Un objeto con propiedades de cierto tipo)
      + Proptypes.shape (Un objeto con propiedades especificas)

    **Validadores especiales para proptypes**
      + PropTypes.node (number, string, boolean, elemento de arreglo)
      + PropTypes.element (Elemento react)
      + PropTypes.instanceOf (Instancia de una clase)
      + PropTypes.oneOf (Esta limitado a un numero especifico de valores)
    
  + DefaultProps: 
    Permiten establecer valores por defecto a las propiedades
     

* Estado ---> state()

  Representa como se encuentra un componente en un momento especifico y cuando este cambie, el componente se rederizara automaticamente. 

  * `Para cambiar el estado de un componente usar .setState`
  * `Evitar la creacion de componentes con estado por que eso implica mas renderizacion `

* Eventos ---> Sinthetic Events

  Sirven para modificar el estado del componente

  Los eventos se disparan de los hijos a los padres

  Los eventos disparados por un componente hijo pueden ser capturados por el componente padre

#### Tipos de componente
* Componentes de presentacion Stateless
  
  Se limitan a mostrar datos y no tienen estado. 
    + Estan orientados al aspecto visual
    + No tienen dependencia con fuentes de datos
    + Reciben callbacks por medio de props (arrow functions) ...?
    + Pueden ser escritos como compotentes funcionales

* Componentes de contenedores 
 
  Encapsulan a otros componentes y proporcionan propiedades, ademas se encargan de manejar el estado de la aplicacion

* Componentes con estado Stateful
  + Orientados al funcionamiento de la aplcacion
  + Se comunican con las fuentes de datos
  + Contienen componentes de presentacion y otros contenedores
#### Tipos de componente
* Sintaxis ES6

```
	class MyComponentStateful extends React.Component {  
		constructor (...props) {
			super(...props)
			this.state = {...}
		}
		render () {...}
	}

	MyComponentStateful.propTypes = {...}
	MyComponentStateful.defaultProps = {...}

	const MyComponentStateless = (...props) => {...}

```
* Sintaxis ES7

```
class MyComponentStateful extends React.Component {  
		static propTypes = {...}
		static defaultProps = {...}
		state = {...}
		constructor (...props) {
			super(...props);
		}
		render () {...}
}

const MyComponentStateless = (...props) => {...}

```


