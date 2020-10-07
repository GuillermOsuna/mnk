Pasos para Ejecutar el proyecto

En el proyecto encontraras las carpetas back y front

La carpeta back es el proyecto creado en laravel 8 tendrá solo la funcion de API rest. 
Para comenzar con su instalacion es necesario seguir los siguientes pasos:

1 - instalar php 7.4.10

2 - instalar composer

3 - crear una base de datos postgresql. En el archivo .env del proyecto podrás ver los datos que se utilizan para la conexion a la BD, si es necesario cambiarlos a tu configuración es posible hacerlo

4 - una vez conectada la BD se tendrás que correr una migracion con el comando: php artisan migrate

5 - Corre el proyecto con el comando: php artisan serve


La carpeta front esta creado con typescript, reactjs y Material-ui 
para poder ejecutar este proyecto es necesario:

1- instalar node v12.16.2 junto con npm 6.14.8

2-es necesario descargar todas las dependencias del proyecto con el comando: npm install

3- una vez termine levantamos un servicio con el comando: npm start


Nota:
El back se ejecuta en el puerto 8000 y el front en el 3000.
Cuando corremos la migración se ejecutan inserciones iniciales para poder utilizar la aplicación.
Nos aparecerá un login y podemos iniciar sesión con la siguiente cuenta:
correo: admin@admin.com
contraseña: admin
