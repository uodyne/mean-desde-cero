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

