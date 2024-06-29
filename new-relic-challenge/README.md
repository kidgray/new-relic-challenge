# NewRelicChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# NEW RELIC CUSTOMER LIST APP/TECHNICAL CHALLENGE

This is a programming challenge that involves creating an app that allows users to view and filter a list of customers in a variety of ways.

As per the assignment specifications, 2 basic functionalities will be included at the outset:

A.) SEARCH by a customer's first name OR last name via a text input field,
B.) FILTER by a customer's company name via a select dropdown

# Table of contents
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Setting up the database connection](#setting-up-the-database-connection)
- [Explanation](#explanation)
- [Usage](#usage)
- [Q&A](#q%20&%20a)

# Installation
[(Back to top)](#table-of-contents)

Navigate to the directory in which you want to install the project, then run the following command:

```git clone https://github.com/kidgray/new-relic-challenge.git```

To install the project dependencies, navigate to the root directory of the cloned project and use
the following command:

```npm install```

NOTE: This project uses the following ports:

    Client: Port 4200
    Server: Port 3000

Please make sure these ports are available for use prior to executing it.

You may start the client by navigating to the root directory and using the command:

```ng serve```

You may start the server by navigating to the server folder and using the command:

```nodemon --inspect server.js```

OR 

```node --inspect server.js```

Upon success, the app may be accessed at:

    http://localhost:4200

# Setting up the database connection
[(Back to top)](#table-of-contents)

This app uses PostgreSQL to store data.

# Explanation
[(Back to top)](#table-of-contents)


# Usage
[(Back to top)](#table-of-contents)

Since this project only includes a Back-end, there is no UI with which to test the functionality. Consequently, if you wish to test the functionality yourself,
you will have to use some kind of platform that allows you to send HTTP requests and receive responses. I am using Postman. Of course, in order to test this locally,
you must install the dependencies and run the server (see Installation section).

## Creating an Account (User)

To create a User, send a POST request to the /register endpoint. Upon successful creation, the new user that has been created will be returned as a response.
The required payload and response are:

![Register Endpoint Test](./Register%20Endpoint%20Test.png "Register Endpoint Test")

# Q & A
[(Back to top)](#table-of-contents)

### Why did you use an auto-incremented INTEGER for ids? Isn't that a bit unsafe?

Typically I would use something like a UUID for ids, but SQLite doesn't support a BOOLEAN(16) type for ids, and storing UUIDs in a STRING
would complicate the implementation of the pivot tables, so I decided to keep it simple and just use auto-incremented integers.

### Why did you use the STRING type for Posts? Posts can contain images or videos too, can't they?

This is a similar question to the one above, and the answer is similar as well. I'd typically use something like a BLOB for a post,
but for simplicity's sake I decided to stick to just the bare basics of what constitutes a post (text). This should suffice for the
purposes of this exercise.

### Why are you using sync() instead of migrations? Aren't migrations better and more reliable/efficient?

Yes, but they're also more time-consuming to set up, and unfortunately, I'm on a bit of a tight schedule.

### Why did you use .then() for the /users route but async/await for every other route?

Basically just to demonstrate that I can work with both promise chaining and async/await syntax. Since that route
is there just for testing, it's the ideal place to do it.

### Why did you include a .env file in the repo? Isn't that a security risk?

Again, this was done for demo purposes. I typically wouldn't do this (or use a simple string for the secret key, for that matter).
