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

  
## Credits 
All credits got for [Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) cours in react Path in pluralsight made by Cory House.