const readdirp = require("readdirp");
const mongoose = require("mongoose");
const RCSchema =require("./models/schema");
let data = null;

mongoose.connect("mongodb://192.168.99.101/rcDB");
mongoose.Promise=global.Promise;
mongoose.connection.once("open", function() {
    console.log("Connection succesfull !");
}).on("error", function(error) {
    console.log("Connection error :", error);
});

var settings = {
    root: "./node_modules/eslint/lib/rules",
    entryType: "all",
    fileFilter: [ "*.js", "*.json", ],
};

readdirp(settings)
    .on("data", function (entry) {
        // execute everytime a file is found in the providen directory
        //console.log(entry);
        // Store the fullPath of the file/directory in our custom array 
        data = require(entry.fullPath);
        let noExtensionNameArray = entry.name.split(".");
        let noExtensionName = noExtensionNameArray[0];
        if(data.meta.deprecated == null){
            //console.log(entry.name + "deprecated" + false);

            RCSchema.create({rule: noExtensionName,deprecated: false,enabled: false,})
                .then(function(dbData){
                  
                });
        }else {
            //console.log(entry.name + " deprecated " + data.meta.deprecated);
            RCSchema.create({rule: noExtensionName,deprecated: true,enabled: false,})
                .then(function(dbData){
                
                });
        }
      
    })
    .on("warn", function(warn){
        console.log("Warn: ", warn);
    })
    .on("error", function(err){
        console.log("Error: ", err);
    })
    .on("end", function(){

        //console.log(allFilePaths);
        console.log("database populated with existing rules"); 
       
    });