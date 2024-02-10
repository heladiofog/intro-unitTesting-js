# Intro to (Unit) Testing with JS

## `demos` folder
This folder contains all the basic code samples to show how to create several basic jest tests with some of the tools provided by the framework such as:
- matchers
- setup & teardown
- async tests
- mocking

This demo project includes an ESLint basic configuration in place, it uses the Airbnb rule set for the static code analysis and code conventions.

## `api` folder
This folder contains a sample Node api ready to use. It also includes a mongo Docker setup to have a MongoDB in place in order to run the api project.

Once Mongo is running, you should create the books collection in the app DB and insert a couple of documents.

- You can initialize MongoDB with the next command from the root of the folder:
``docker-compose up -d mongo``

- You can start the api project with:
- ``npm run dev``

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

