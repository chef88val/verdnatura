# verdnatura

**Tarea**: Diseño de una API RESTful

**Descripción de la Tarea**:
Queremos que diseñes y construyas una API RESTful que implemente un modelo CRUD (Create, Read, Update, Delete) para una aplicación de administración de libros. Los libros deberán tener los siguientes atributos: título, autor, año de publicación y género.

La API deberá incluir los siguientes **endpoints**:
```
POST /books: para crear un nuevo libro.
GET /books: para obtener la lista de todos los libros.
GET /books/:id: para obtener los detalles de un libro en particular.
PUT /books/:id: para actualizar la información de un libro.
DELETE /books/:id: para eliminar un libro.
```
**Requisitos**:

La API debe estar escrita en Node.js utilizando el framework Express.js.
Deberás utilizar una base de datos MongoDB para almacenar la información de los libros.
Por favor, proporciona instrucciones claras para instalar y ejecutar tu API.

### Lanzar consumir el API
1. Tener instalado en el sistema Docker
2. Abrir una terminal y ejecutar el siguiente comando: 
   ```
   docker compose -f "docker-compose.yml" up -d --build 
   ```
3. Una vez levantado el contenedor correctamente, abrimos una nueva terminal y ejecutamos el siguiente comando:
   ```
   npm run start
   ```
   ##### Veremos que nos aparece un mensaje similar a '**Server Started at 3100**', en este punto ya podemos hacer uso del API.
5. También podemos lanzar los test( aunque alguno falla por timeout), abrimos una nueva terminal y ejecutamos el siguiente comando:
   ```
   npm run jest
   ```
6. Podemos construir el api como imagen docker con el siguiente comando:
    ```
    docker build --pull --rm -f "Dockerfile" -t verdnatura:latest "." 
    ```