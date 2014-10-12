# MEAN desde cero

## Demo
http://stark-wave-6307.herokuapp.com/

## Instalación
```sh
git clone git@github.com:uodyne/baseMean.git myApp
cd myApp
npm install & bower install
```
## Run
```sh
npm start
```
La aplicación estará corriendo en [localhost:3000](http://localhost:3000/).

## Deploy en Heroku

Instala, si no lo tienes:[Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
heroku create
git push heroku master
heroku open
```
Para hacer deploy a una app existente, en lugar de create puedes hacer:

```sh
heroku git:remote -a ***name-app-heroku***
```

Si tienes ya alguna configuración de heroku sobre esta app, puedes eliminarla:

```sh
git remote rm heroku
```
Para ver la info remote

```sh
git remote -v
```

Y en caso que no pueda hacer un push, da errores, haz un forzado:

```sh
git push -f heroku master
```

# Commits / paso a paso

- Creado el fichero .gitgnore para evitar push de directorios como node_modules, .idea (webstorm), etc.

- Definimos la estructura básica del backend del proyecto.

    /server.js      Servidor NodeJS

    /app
        /models     Model Schema de BBDD de mongoDB
        /routes     Rutas de la aplicación backend. Es decir, tanto el index.html como la API REST que conectará con mongoDB.
    /config         Aquí vienen los ficheros de configuración de la aplicación backend (p.e. datos de accesso BBDD).

- Definimos una estructura básica para el frontend.

    /public
        /assets         Archivos estátidos del site
            /css
        /controllers    Controladores de la aplicación
        /views          Vistas html

    Más adelante se creará una estructura más ámplia para las fábricas, servicios, routes,... de AngularJS.

- Creación de fichero de configuración de Bower. Bower es un proyecto open-source salido de Twitter. Funciona de forma parecida a NPM en Node.js. En un fichero JSON anotamos las librerías que necesitamos y con un simple comando se nos descargarán en el directorio que queramos de nuestra aplicación.

- Creamos package.json definiendo las dependencias de nuestro stack MEAN necesarias. Express, Mongoose, Request, y Bower para las posteriores dependencias del frontend. También se le indica la versión de node que debe ejecutar, la ruta del repositorio, y el script que debe ejecutar tanto al inicio del servidor como en el post-install. Tanto esto último como "engines" es para que Heroku sepa qué debe hacer.

- Instalamos todas las dependencias de node, mediante; "npm install" en la línea de comandos dentro del directorio raiz del proyecto (/mean-desde-cero/). Revisar que dentro de node_modules se encuentran los módulos: bower,express,mongoose y request.

- Instalar dependencias de Bower. Vale, es absurdo porque no hay dependencias. Pero probadlo para asegurarse que no da error y cuando lo necesitemos no tengamos problemas de última hora. Es recomendable dejar toda la estructura preparada antes de comenzar a meter código como cosacos.

- Creamos el servidor con Express y probamos con "node server.js".

- Definimos el Schema de la tabla de MongoDB

- Creamos una API Rest JSON muy básica para comenzar a utilizar

- Añadimos los módulos de AngularJS con Bower.

- Damos funcionalidad y la finalizamos.

- En el commit anterior, cambiamos la definición del puerto para que heroku pueda ejecutar la aplicación.

- Damos formato frontend con Bootstrap de base.

- Cambiamos estructura de AngularJS, ya que en lugar de separar por controladores, vistas, etc. lo haremos por applicaciones. Eso se hará cuando el proyecto sea grande, en caso de ser pequeño se dejará así.

