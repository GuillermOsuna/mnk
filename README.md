Pasos para Ejecutar el proyecto

El proyecto esta conformado por dos carpetas back y front
back esta creado en laravel 8

1 - instalar php 7.4.10
2- instalar composer
3- crear una base de datos postgresql, en el archivo .env del proyecto podrás ver que datos conexión se esta utilizando. Si es necesario se puede cambiar
4-una vez conectada la BD se tendrá que correr una migracion con el comando: php artisan migrate
5- Corre el proyecto con el comando: php artisan serve


front esta creado con typescript, reactjs y también utiliza Material-ui 
para poder ejecutar este proyecto es necesario:

1- instalar node v12.16.2 junto con npm 6.14.8
2-es necesario descargar todas las dependencias del proyecto con el comando: npm install
3- una vez termine levantamos un servicio con el comando: npm start


Nota:
El back se ejecuta en el puerto 8000 y el front en el 3000.
Cuando corremos la migración se ejecutan inserciones iniciales para poder utilizar la aplicación
nos aparecerá un login y podemos iniciar con la siguiente cuenta:
correo: admin@admin.com
contraseña: admin
