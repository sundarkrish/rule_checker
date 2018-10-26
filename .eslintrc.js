module.exports  = {
    "extends": ["eslint:recommended"],
    "rules": {
      
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-unused-vars": ["off"],
        "indent-legacy": ["error"],
        "inden333": ["error"],
        "comma-dangle": ["off"],
        "no-cond-assign": ["error", "always"],

       
        "no-console": ["off"]
    },
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true,
        "node" : true,
        "jquery" : true
    }

}