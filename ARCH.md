# Architecture

## Basic principles

- every dependency is passed down : DI
- modules are as much decoupled as possible : low coupling
- functions and modules are as focused as possible : high cohesion
- Every function depends up on the interface. This has to be written specifically.
- Test everything. TDD or whatever, 100% coverage with negative test cases.

## Structure

### Rules

*.rules.js

This is how we are managing external dependencies. This is manual DI file.

### Routes

*.routes.js

Defines what routes are present in the service.

### Depedencies

Defines what other services or modules are used.

External modules are discouraged. Try to create a service for them and use that.

### Controller

Where all the fun happens.

### Server

server.js

This serves the requests.
You need to DI the blip out of it.
All the dependencies must be passed to it.
