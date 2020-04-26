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
     
  
## Credits 
All credits got for [Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) cours in react Path in pluralsight made by Cory House.