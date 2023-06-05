This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

* First, clone the repository:
* Second, recreate node_modules folder

```bash
yarn
```
* Third, run the development server
```bash
yarn run dev
```
* Four, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn more
This project was created with clean architecture. The idea is to organize all the folders with a specific functionality.
This app has:
* Context API: This is a simple application, for that reason we can use basic state management to communicate between components.
* Services with adapters: Right now the API response has a specific structure but in the future could be changed, so we use an adapter to transform the current response to "Adapter Response" and prevent future problem.
* Hooks: the idea is to centralize the important actions of the service consumption and create a custom hook to manage that flow.
* Utils: This folder contains interfaces, constants, and helper functions to resolve connections or translate specific information.
* Components: Portions of code that are used at specific points in the application, in order to reuse or ensure better readability of the code, ensure better maintenance and possible expansion of the application.
* Tailwind css: Nextjs natively configures this way of creating the app's UI, so I decided to implement it.
* Typescript: This is the modern way to create a React app in June 2023.

## Note:
Using nextjs, we can use its smart folder system to define dynamic routes and make it easier to design this application, simply by calling the specific endpoint and creating a route to consume this information, but the API used didn't have an ideal endpoint to search for. countries, so it was necessary to include a context and on the front side, create the search engine logic.
