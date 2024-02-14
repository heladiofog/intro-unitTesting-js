# Setiings and configurations for the API example

## For integration and e2e tests
This folder contains a sample Node api ready to use. It also includes a mongo Docker setup to have a MongoDB in place in order to run the api project.

Once Mongo is running, you should create the books collection in the app DB and insert a couple of documents.

You can initialize MongoDB with the next command from the root of the folder:

 `docker-compose up -d mongo`

And you can stop it with:

 `docker-compose stop mongo`

You can start the api project with:
- ``npm start``

__FakerJS__
- FakerJS It will be used for creating fake data iin Unit Tests.
  - `npm install @faker-js/faker --save-dev`
- add a rule to `eslintrc.js` file, "rules" section should look like:
  ```
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDepenedencies: true }
    ],
  }
  ```

__Supertest__
  - `npm install supertest --save-dev`
  - Add a folder for e2e tests at root level.
  - Add a config file named: `jest-e2e.json` fot setting up e2e tests with the following configuration:
  ```
  {
    "moduleFileExtensions": ["js"],
    "rootDir" : ".",
    "testEnvironment": "node",
    "testRegex" : ".e2e.js$"
  }
  ```

  - Add a new script for e2e tests on the `package.json` file:
    ```
    "test:e2e": "jest --config ./e2e/jest-e2e.json --forceExit"
    ```

__e2e Tests__
Debemos configurar una nueva DB en el archivo `docker-compose.yml`.
- Se deben ajustar las credenciales en la cadena de conexión del archivo `.env`.
- Se levanta dicha base de datos con cl comando correspondiente.
  - `docker-compose up -d mongo-e2e`
- En este tipo de pruebas sí se requiere una BD para hacer las pruebas completas (e2e).
