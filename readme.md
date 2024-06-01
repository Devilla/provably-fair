# Provably Fair Backend

> A provably fair fairness backend for various games.

## About

This project uses [Feathers](http://feathersjs.com). An open source framework for building APIs and real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    git clone https://github.com/spinbet/provably-fair
    cd provably-fair/
    yarn
    ```

3. Start your app

    ```
    yarn compile # Compile TypeScript source
    yarn migrate # Run migrations to set up the database
    npm start
    ```

## Testing

Run `yarn test` and all your tests in the `test/` directory will be run.
```
$ yarn test
yarn run v1.22.21
$ cross-env NODE_ENV=test npm run migrate && npm run mocha

> provably-fair-backend@0.0.0 migrate
> knex migrate:latest

Requiring external module ts-node/register
warn: Publishing all events to all authenticated users. See `channels.ts` and https://dove.feathersjs.com/api/channels.html for more information.
Already up to date

> provably-fair-backend@0.0.0 mocha
> cross-env NODE_ENV=test mocha test/ --require ts-node/register --recursive --extension .ts --exit

warn: Publishing all events to all authenticated users. See `channels.ts` and https://dove.feathersjs.com/api/channels.html for more information.
server seed is b8ae1822-9bf1-4583-a406-e08389af7a85
client seed is 837cc94f-f117-4952-a0e5-af0a87387069
roll with both seeds: 3



  Feathers application tests
    ✔ starts and shows the index page (55ms)
    ✔ shows a 404 JSON error

  application client tests
    ✔ initialized the client
    ✔ creates and authenticates a user with email and password (411ms)

  rollDice
    ✔ should generate a number between 0 and 100

  mines
    ✔ should generate a number between 0 and 1
    ✔ should return 0 when x is out of bounds
    ✔ should return 0 when y is out of bounds

  provably-fair service
    ✔ registered the service

  users service
    ✔ registered the service


  10 passing (589ms)
```

## Scaffolding

This app comes with a powerful command line interface for Feathers. Here are a few things it can do:

```
$ npx feathers help                           # Show all commands
$ npx feathers generate service               # Generate a new Service
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
