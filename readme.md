# Node REST API

A kick start project for implementation of RESTful API with Node.js using ES6.
Features include:

-   Use of the Hexagonal Architecture to arrange the application into logical
    layers, with well-defined responsibilities.
-   RESTful APIs are implemented using the [Express](http://expressjs.com/)
    framework.
-   Persistence is implemented using an in-memory repository layer. This can be
    substituted with any persistence technology of your choice.
-   MSSQL & MySql adaptors are provided for flexiblity to connect with database.
    Database credentials need to be updated to `.env` file

## Dev Build

```bash
$ npm install
$ npm start
```

The dev build starts the application in watch mode. If you make any changes to
the source files, the application will recompile and restart.

To verify that the application is working correctly, point your browser to
[http://localhost:3000/api/products/1](http://localhost:3000/api/products/1) -
you should see a response with one product in JSON format.

You can see a OpenAPI (Swagger) definition of the REST API at
[http://localhost:3000/api-docs/](http://localhost:3000/api-docs/). This
interface also allows you to interact with the API. Postman Collection provided
with this repository.

To debug the application in Chrome, point the browser to chrome://inspect and
click on "Open dedicated DevTools for Node".

## Production Build

```bash
$ npm run prettier
$ npm run build
$ npm run serve
```

## Prettier

```bash
$ npm run prettier
```

## Folder Structure

```
/src
    /routes
    /services
    /repositories
    /connectors
    /utils
```

The source folder contains sub-folders that arrange the application into logical
layers:

-   `routes`: This is the adapter layer of the Hexagonal Architecture. It adapts
    the HTTP transforms the HTTP requests from the external world to the service
    layer and transforms the objects returned by the service layer to HTTP
    responses.

-   `services`: The service layer coordinates high-level activities such as
    creation of domain objects and asking them to perform tasks requested by the
    external world. It interacts with the repository layer to save and restore
    objects.

-   `repositories`: The repository layer is responsible for persisting domain
    objects and performing CRUD operations on them. This template uses in-memory
    persistence for products & Mysql & MSSql connector to connect with database.

-   `connectors`: The connector layer allows application to connect with
    database for all queries. Currently connectors are available for `MySql` &
    `Mssql`. Mysql connector is using `mysql` driver. MSSql connector is using
    `mssql` & `tedious` driver, it is upon user to choose the drivers based on
    flexiblity.

-   The `utils` folder contains useful utilities and helpers.
