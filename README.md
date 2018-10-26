 The rule checker script (app.js) when run displays the rules that are :

  - Deprecated/removed,but still enabled in the project.
  - New rules that are added to ESLint,but are missing in the project.
   ( ie  all currently disabled rules are considered missing.  )
  - The output is displayed on the console in JSON format

# Directory strucuture
All files and folders are in the project directory.The packages are installed in the local project directory and not globally.
 ```sh
|--models
    |--schema.js
|--node_modules
    |--eslint
|--.eslintrc.js
|--app.js
|--populate_db.js
|--package-lock.json
|--package.json

 ```

  - app.js : The main script which checks for deprecated/removed/missing rules. 
  - populate_db.js : This script puts all the rules as part of the current ESLint version into the database(mongoDB).
    - Database name: rcDB
    - schema name: rcschemas
  - schema.js : A schema to represent the collection rules in mongoDB.
  
  
# Instructions

### Note: 
 - MongoDB and Node should be installed and configured priorly.
 - Use Robo 3T for visualization purpose (optional)
 - Copy and paste app.js(main file), populate_db,  .eslintrc.js &  models folder in the project directory(ignore the rest)

 ```sh
$ npm init (In the project directory)
$ npm install mongoose  --save
$ npm install eslint  --save
$ npm install readdirp  --save
$ node populate_db.js (should be run only once)
$ node app.js
 ```

 
(Now the dir strcuture resembles the above one.See the console or terminal window for the results)

The output for the above .eslintrc.js configuration is as follows: 
```
{ deprecated: 'indent-legacy' }
{ removed_or_invalid: 'inden333' }
{ missing: 'accessor-pairs' }
{ missing: 'array-bracket-newline' }
{ missing: 'array-bracket-spacing' }
{ missing: 'array-callback-return' }
{ missing: 'array-element-newline' }
{ missing: 'arrow-body-style' }
{ missing: 'arrow-parens' }
{ missing: 'arrow-spacing' }
{ missing: 'block-scoped-var' }
{ missing: 'brace-style' }
{ missing: 'block-spacing' }
{ missing: 'camelcase' }
{ missing: 'capitalized-comments' }
{ missing: 'class-methods-use-this' }
{ missing: 'comma-dangle' }
{ missing: 'comma-spacing' }
{ missing: 'complexity' }
{ missing: 'callback-return' }
{ missing: 'computed-property-spacing' }
{ missing: 'comma-style' }
{ missing: 'consistent-return' }
```

