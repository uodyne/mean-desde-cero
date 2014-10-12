# MEAN desde cero

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

