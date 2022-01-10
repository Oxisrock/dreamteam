#CONFIGURACION
en la ruta /server/config/config.json
se debe agregar los datos
+ "username": "root", usuario de mysql
+ "password": null, contraseña de mysql
+ "database": "players", base de datos de mysql
+ "host": "127.0.0.1", host de mysql
+ "dialect": "mysql" manejador de db de mysql
#COMANDOS
1. npm run migrations
 + para usar las migraciones en el proyecto y crear el schema de la tabla
2. npm run seeders
 + para rellenar los datos de esa tabla
3. npm run rollback
 + para poder devolver los seeders y las migraciones
