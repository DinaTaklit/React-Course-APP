# Manage Courses Application Using React, React Router, Flux

![](ReactManageCourseApp.mp4)

## What I have learned from this App?
### Envirement Setup 
- Configure VS Code Extensions: Use Prettier and ESLint extention to help format the code and write correct code
- Create app with `create-react-app`
- Install Flux, React Router, and Bootstrap 
- Create Mock API to get mock date to stimulate a db to use it in the app.
### Creating React Compoenents 
- Create Function/Class Componenet 
- Create App Entry Point 
- Simple Routing
### Props, State, Lifecycle Methods, and Keys
- Props & State
- Lifecycle Methods 
- Display Array in a Table via Map
- Keys
### Hooks, Component, Componsition, and Prop Types
- Hooks, 
- Composing Components 
- PropTypes and Default Props
### React Router 
- Intial COnfiguration, Declaring Routes
- Links and NavLinks
- Switch & 404s
- Redirects
- URL Parameters and Querystrings
- URL Parameters 
- Prompt on Transition 
### Forms 
- Create Form
- Controlled Components
- Form State and Change Handlers
- Declaring State Change Handlers
- Create & Consume Reusable Inputs
- Saving Data 
- Programmatic Redirects with React Router
- Notifications via Third Party Component (Toast)
- Input Validation and PropTypes
- Populate Form via the URL 
### Flux 
- Dispatcher 
- Actions
- Stores: Change Listeners, Registration, Private Sorage, Interactions, Initialization
- Update Course Flow with Flux
- Adding Store Listeners
- Delete Course via Flux 
  
## Get Started 

- To create the app use `npx create-react-app name_app`
- Install the packages for this project `npm install flux@3.1.3 react-router-dom@5.0.0 bootstrap@4.3.1`
- Install some tools to create Mock API `npm install -D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0` => since tose tools are developement tools we add `-D` to be listed under dev dependencies when they're written to package.json, `corss-env` is a handy library for setting env vars, `npm-run-all` to run multiple scripts at the same time,`json-server` will serve our moch data. 
### Mock API 

- We need to configure our MoCK API to generate mock data: 
  
    - under tools directory we have 4 file: 
      - `apiServer.js`: It will serve the API that we use in this project. This uses `Express` and `json-server` to host a mock API and simulated database using a JSON file.
      - `createMockDB.js`: Thiw will create our mock DB each time we start the app. The script will read our mock and write it to separate file called `db.json`. The `db.json` file will be read and manipulated by our API server.
      - `mockData.js`: contains the mock data. This data will be used to populate our mock database. This mock data contains an array of Pluralsight courses and down at the bottom also an array of authors, as well as the data structure for creating a new course.
  
#### Kept the scripts to use 

To kept the scripts above to use we need to add new scripts  `pakage.json` 

- ` "start:api": "node tools/apiServer.js",` : this script will use Node to call `tools/apiServer.js`. 
- We want to reacreate the mock database each time that we start our API. to do so let us create another script called `prestart:api`that will use node to call `tools/createMockDB.js`. By convention, this will run before `start:api` because it has the same name, but prefixed with `pre`. The mock database will be recreated in each restart
- Now let set set up the mock api to start every time we start the app. To do so we should reanem the start script => `"start:dev":react-scripts start` then create a new start script right above it. Here we're going to use the `npm-run-all` package, which provides a command called `run-p` this will allow to run both the app and the mock api in the same time. `run-p` stand for run parallel. We provide this command with list of scripts we want to run in the same time in our case `start:dev`, `start:api` => `"start": run-p start:dev start:api`. Once we run now npm start it should run both the application and our mock api.

#### Use the mock API 

The folder `api` under `src` folder contains file that make it easier to use the mock API:

- `CourseApi` contains functions that will get courses, save courses and delete courses.
- `AuthorApi`contains functions that will get authors, save authors and delete authors.
- `apiUtils` centralizes the handling of our API responses. We're using fetch to make API class. Fetch is build into modern browsers so we can make HTTP calls without installing an extra library.

#### Configure the Env var for the base URL of the mock API 

To configure the API base URL we need to update the package.json file: 
- Set `start:dev` script to run `cross-env`. This is package from npm that we installed to allows us to set environment variables in cross- platform friendly way. The env var we want to set is `REACT_APP_API_URL`, and we will set it to the URL for our mock API which is `localhost:3001`
- `create-react-app` will loks for any env var that start with `REACT_APP` and allows us to replace their values in code.
  
### Other packages 

- Install toast to show toast message by running `npm install react-toastify@5.1.1`
`

## Credits 
All credits got for [Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) cours in react Path in pluralsight made by Cory House.