function createEssay(title, link, date, extra = {}) {
  return { title, link, date, ...extra }
}

export default [
  createEssay(
    'Introducing Grial',
    'https://dev.to/sergiodxa/introducing-grial',
    '2017-07-28T00:00:00Z'
  ),
  createEssay(
    'Introducing Grial',
    'https://medium.com/@sergiodxa/introducing-grial-js-6c414d6dc947',
    '2017-07-25T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Aplicando estilos a Pulse Editor con styled-components',
    'https://platzi.com/blog/aplicando-estilos-a-pulse-editor-con-styled-components/',
    '2017-07-11T17:06:55.531181Z',
  ),
  createEssay(
    'Bye Platzi, hi ▲ZEIT',
    'https://medium.com/@sergiodxa/bye-platzi-hi-zeit-2d1604a0b7b7',
    '2017-07-07T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Implementando un servidor de GraphQL',
    'https://platzi.com/blog/implementando-un-servidor-de-graphql/',
    '2017-07-07T15:42:42.778208Z',
  ),
  createEssay(
    'Ciclo de vida de un componente de React.js',
    'https://platzi.com/blog/ciclo-de-vida-de-un-componente-de-reactjs/',
    '2017-07-06T15:31:07.735183Z',
  ),
  createEssay(
    'Usando socket.io en aplicaciones de Next.js',
    'https://platzi.com/blog/usando-socketio-en-aplicaciones-de-nextjs/',
    '2017-06-28T21:25:14.345226Z',
  ),
  createEssay(
    'Personalizando Babel.js en aplicaciones de Next.js',
    'https://platzi.com/blog/personalizando-babeljs-en-aplicaciones-de-nextjs/',
    '2017-06-27T21:21:46.326799Z',
  ),
  createEssay(
    'Mezclando flujos síncronos y asíncronos usando promesas en JavaScript',
    'https://platzi.com/blog/mezclando-flujos-sincronos-y-asincronos/',
    '2017-06-23T22:39:48.419988Z',
  ),
  createEssay(
    'Depurando aplicaciones de Node.js v8.0.0',
    'https://platzi.com/blog/depurando-aplicaciones-de-nodejs-v800/',
    '2017-06-22T17:02:35.162521Z',
  ),
  createEssay(
    'Creando sitios estáticos con Next.js',
    'https://platzi.com/blog/creando-sitios-estaticos-con-nextjs/',
    '2017-06-21T21:40:06.700773Z',
  ),
  createEssay(
    'Creando botones propios para Pulse Editor',
    'https://platzi.com/blog/creando-botones-propios-para-pulse-editor/',
    '2017-06-20T21:10:25.071920Z',
  ),
  createEssay(
    'Te presentamos la nueva versión de Node.js',
    'https://platzi.com/blog/nueva-version-nodejs-npm/',
    '2017-06-04T02:13:27.006611Z',
  ),
  createEssay(
    'Introducción a GraphQL',
    'https://platzi.com/blog/introduccion-a-graphql/',
    '2017-05-29T00:42:30.912340Z',
  ),
  createEssay(
    'Aplicación de escritorio Pulse',
    'https://platzi.com/blog/aplicacion-de-escritorio-pulse/',
    '2017-05-24T15:35:48.147791Z',
  ),
  createEssay(
    'Implementando Pulse Editor',
    'https://platzi.com/blog/implementando-pulse-editor/',
    '2017-05-23T19:03:00.573727Z',
  ),
  createEssay(
    'Presentamos Pulse Editor',
    'https://platzi.com/blog/presentamos-pulse-editor/',
    '2017-05-22T16:23:20.951896Z',
    { highlighted: true }
  ),
  createEssay(
    'Implementa Progressive server-side render con Next.js',
    'https://platzi.com/blog/progressive-server-side-render/',
    '2017-04-07T21:01:46.242580Z',
  ),
  createEssay(
    'Crea aplicaciones de escritorio con Electron y Next.js',
    'https://platzi.com/blog/crea-aplicaciones-de-escritorio-con-electron-y-nextjs/',
    '2017-04-05T19:07:07.402370Z',
    { deprecated: true }
  ),
  createEssay(
    'Manejo de dependencias JavaScript con Yarn',
    'https://platzi.com/blog/manejo-de-dependencias-javascript-con-yarn/',
    '2017-03-29T21:18:26.374241Z',
  ),
  createEssay(
    'Next.js, el futuro de las aplicaciones con React',
    'https://platzi.com/blog/nextjs-el-futuro-de-las-aplicaciones-con-react/',
    '2017-03-27T15:40:26.780699Z',
    { highlighted: true }
  ),
  createEssay(
    'Deploy y orquestación de microservicios con now.sh',
    'https://platzi.com/blog/deploy-microservicios/',
    '2017-03-10T00:00:00Z',
  ),
  createEssay(
    'Qué son y cómo funcionan las promesas en JavaScript',
    'https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/',
    '2017-03-06T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Introducción a JSON Web Tokens (JWT)',
    'https://platzi.com/blog/introduccion-json-web-tokens/',
    '2017-01-04T01:00:00Z',
  ),
  createEssay(
    '¿Qué es y para qué sirve Babel?',
    'https://platzi.com/blog/que-es-babel/',
    '2017-01-04T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    '¿Qué es una aplicación isomórfica?',
    'https://platzi.com/blog/aplicaciones-isomorficas/',
    '2016-12-21T00:00:00Z',
  ),
  createEssay(
    'Sobre el ecosistema y la fatiga de JavaScript',
    'https://medium.com/@sergiodxa/sobre-el-ecosistema-y-la-fatiga-de-javascript-73027048413f',
    '2016-10-10T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Desarrollando aplicaciones de escritorio con Electron.js',
    'https://platzi.com/blog/aplicaciones-escritorio-electron-js/',
    '2016-08-25T00:00:00Z',
  ),
  createEssay(
    'Crea microservicios en Node.js con micro.js',
    'https://platzi.com/blog/microservicios-en-node-con-micro/',
    '2016-08-17T00:00:00Z',
  ),
  createEssay(
    'Usando React.js en el servidor con Django',
    'https://platzi.com/blog/react-js-en-servidor-con-django/',
    '2016-07-19T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Estado inmutable con Redux e Immutable.js',
    'https://medium.com/react-redux/estado-inmutable-con-redux-e-immutable-js-5a3d69ef0451',
    '2016-06-27T00:00:00Z',
  ),
  createEssay(
    'Componentes de Alto Orden en React.js',
    'https://medium.com/react-redux/react-componentes-alto-orden-2498211e933f',
    '2016-06-15T00:00:00Z',
  ),
  createEssay(
    'Obteniendo datos en aplicaciones de Redux',
    'https://medium.com/react-redux/obteniendo-datos-en-aplicaciones-de-redux-1007e8703521',
    '2016-06-13T00:00:00Z',
  ),
  createEssay(
    'Renderizando aplicaciones de Redux en el servidor',
    'https://medium.com/react-redux/server-render-react-redux-1f6cb0b557c9',
    '2016-06-10T00:00:00Z',
  ),
  createEssay(
    'Usando Redux en el servidor con Socket.io',
    'https://medium.com/react-redux/wip-usando-redux-en-el-servidor-con-socket-io-61e31242e366',
    '2016-05-20T00:00:00Z',
  ),
  createEssay(
    'Creando código modular con ducks de Redux',
    'https://medium.com/react-redux/creando-c%C3%B3digo-modular-con-ducks-de-redux-bfd7b67ff8c0',
    '2016-04-25T00:00:00Z',
  ),
  createEssay(
    'Manejo de errores en Redux.js',
    'https://medium.com/react-redux/manejo-de-errores-en-redux-js-adf9dfa0129b',
    '2016-04-15T00:00:00Z',
  ),
  createEssay(
    'Migrando a Redux',
    'https://medium.com/react-redux/migrando-a-redux-f7a15457a805',
    '2016-04-13T00:00:00Z',
  ),
  createEssay(
    'Glosario de términos de Redux',
    'https://medium.com/react-redux/glosario-de-t%C3%A9rminos-de-redux-c2bca005ca69',
    '2016-04-11T00:00:00Z',
  ),
  createEssay(
    'Estructura de archivos Ducks para Redux.js',
    'https://medium.com/react-redux/estructura-de-archivos-ducks-para-redux-js-36bb56a70cb3',
    '2016-04-08T00:00:00Z',
  ),
  createEssay(
    'Ruteo en aplicaciones de Redux y React.js',
    'https://medium.com/react-redux/ruteo-en-aplicaciones-de-redux-y-react-js-d62de452bf1b',
    '2016-04-06T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'Pruebas unitarias en Redux.js',
    'https://medium.com/react-redux/pruebas-unitarias-en-redux-js-d7285c013123',
    '2016-04-04T00:00:00Z',
  ),
  createEssay(
    'Acciones asíncronas en Redux.js',
    'https://medium.com/react-redux/acciones-as%C3%ADncronas-en-redux-js-d06e2514c4b8',
    '2016-04-01T00:00:00Z',
  ),
  createEssay(
    'Middlewares en Redux.js',
    'https://medium.com/react-redux/middlewares-en-redux-js-88081fcd6c91',
    '2016-03-30T00:00:00Z',
  ),
  createEssay(
    'Combinando React.js y Redux.js',
    'https://medium.com/react-redux/combinando-react-js-y-redux-js-7b45a9dc39ac',
    '2016-03-28T00:00:00Z',
  ),
  createEssay(
    'Introducción a Redux.js',
    'https://medium.com/react-redux/introducci%C3%B3n-a-redux-js-8bdf4fe0751e',
    '2016-03-23T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Compilando el Frontend con webpack',
    'https://medium.com/@sergiodxa/compilando-el-frontend-con-webpack-d251f7a632ec',
    '2015-09-27T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'Internacionalización con React.js y FormatJS',
    'https://medium.com/@sergiodxa/internacionalizaci%C3%B3n-con-react-js-y-formatjs-389957dbc098',
    '2015-09-26T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'Introducción a ECMAScript 2016/7',
    'https://medium.com/@sergiodxa/introducci%C3%B3n-a-ecmascript-2016-7-da73067698cc',
    '2015-09-25T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'Mi experiencia como estudiante de los cursos de Platzi',
    'https://medium.com/@sergiodxa/mi-experiencia-como-estudiante-de-los-cursos-de-platzi-d7e54368bdff',
    '2015-09-10T00:00:00Z',
    { highlighted: true }
  ),
  createEssay(
    'Lo nuevo en React v0.14',
    'https://platzi.com/blog/react-v014/',
    '2015-07-08T00:00:00Z',
  ),
  createEssay(
    'Usando ECMAScript 6 en tus tareas de Gulp',
    'https://medium.com/@sergiodxa/usando-ecmascript-6-en-tus-tareas-de-gulp-a05f83f8bbac',
    '2015-06-28T00:00:00Z',
  ),
  createEssay(
    'Usando ECMAScript 6/2015 con Babel',
    'https://medium.com/@sergiodxa/usando-ecmascript-6-2015-con-babel-b9cc670b5636',
    '2015-06-09T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'Buenas prácticas del desarrollo FrontEnd',
    'https://medium.com/@sergiodxa/buenas-pr%C3%A1cticas-del-desarrollo-frontend-40f44621841',
    '2015-06-08T00:00:00Z',
  ),
  createEssay(
    'Renderizando React.js en el server con Express.js y react-engine',
    'https://medium.com/@sergiodxa/renderizando-react-js-en-el-server-con-express-js-y-react-engine-903de08c3df6',
    '2015-06-01T00:00:00Z',
    { deprecated: true }
  ),
  createEssay(
    'ECMAScript 6: nueva sintaxis y características para JavaScript',
    'https://platzi.com/blog/ecmascript-nueva-sintaxis/',
    '2015-04-24T00:00:00Z',
  ),
  createEssay(
    'Cómo usar la etiqueta template en HTML5',
    'http://www.cristalab.com/tutoriales/como-usar-la-etiqueta-template-en-html5-c114548l/',
    '2015-01-04T00:00:00Z',
  ),
  createEssay(
    'Automatización de tareas de frontend usando Gulp.js',
    'http://www.cristalab.com/tutoriales/automatizacion-de-tareas-de-frontend-usando-gulp.js-c114514l/',
    '2014-12-22T00:00:00Z',
  ),
  createEssay(
    'Uso de módulos en Javascript con ECMAScript 6',
    'http://www.cristalab.com/tutoriales/uso-de-modulos-en-javascript-con-ecmascript-6-c114342l/',
    '2014-11-07T00:00:00Z',
  ),
  createEssay(
    'Escribiendo CSS de la forma correcta',
    'https://medium.com/@sergiodxa/escribiendo-css-de-la-forma-correcta-b420a498219c',
    '2014-10-31T00:00:00Z',
  ),
  createEssay(
    'Definiendo conceptos: Closure y Scope en JavaScript',
    'https://medium.com/@sergiodxa/definiendo-conceptos-closure-y-scope-en-javascript-9081f1e113e6',
    '2014-07-30T00:00:00Z',
  ),
  createEssay(
    'Ventajas y desventajas de los pre-procesadores de CSS',
    'https://medium.com/@sergiodxa/ventas-y-desventajas-de-los-pre-procesadores-de-css-6528fdac9926',
    '2014-07-08T00:00:00Z',
  ),
  createEssay(
    '¿Qué es Scrum?',
    'https://medium.com/@sergiodxa/que-es-scrum-d6a444e1b03f',
    '2014-07-06T00:00:00Z',
  ),
  createEssay(
    'El módulo Flexbox de CSS3',
    'http://www.cristalab.com/tutoriales/el-modulo-flexbox-de-css3-c112091l/',
    '2013-12-15T00:00:00Z',
  ),
  createEssay(
    'Javascript orientado a objetos',
    'http://www.cristalab.com/tutoriales/javascript-orientado-a-objetos-c111760l/',
    '2013-08-23T00:00:00Z',
    { deprecated: true }
  )
]
