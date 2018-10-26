const mongoose = require("mongoose");
const RCSchema =require("./models/schema");
const config = require("./.eslintrc.js"); 
let enabledRules = [];


let rulePackDirectory = {
    "eslint:recommended": "eslint-recommended", 
};

mongoose.connect("mongodb://192.168.99.101/rcDB");
mongoose.Promise=global.Promise;
mongoose.connection.once("open", function() {
    console.log("Connection succesfull !");
}).on("error", function(error) {
    console.log("Connection error :", error);
});

function display(e){
    console.log(e);

}



function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
}

RCSchema.update({}, {enabled: false}, {multi: true}).then(function(data){   
    console.log("Enabled field of DB set to false again (refreshed)");      
   
}).catch(display); 


// please put extends value in array format eg. "extends": []
let configRules = config.extends;
configRules.map(function(name){
    let rulePack = require("./node_modules/eslint/conf/"+rulePackDirectory[name]);
    Object.keys(rulePack.rules).map(function(ruleName){
        if(rulePack.rules[ruleName] == "error"){
            enabledRules.push(ruleName);
        }
        
    });
});

configRules = Object.keys(config.rules);
configRules.map(function(name){
    
    if(config.rules[name][0] == "error"){
        //console.log(name);
        if(!enabledRules.includes(name)){
            enabledRules.push(name);
        }    
       
    }
    //console.log("-----------------");
    if(config.rules[name][0] == "off"){
        //console.log(name);
        enabledRules = arrayRemove(enabledRules,name);
    }

    
});

//console.log(enabledRules);

enabledRules.map(function(nameOfRule){

    RCSchema.findOneAndUpdate({rule: nameOfRule},{enabled: true})
        .then(function(data){
            //console.log(data);
            if(data == null ){
                console.log({removed_or_invalid: nameOfRule});  
              

                
            } else if(data.deprecated == true){
                
               
                console.log({deprecated: nameOfRule});    
  
            }
        }).catch(display); 
          
});

RCSchema.find({enabled: false}).then(function(data){
    data.map(function(thisData){
        
        if(thisData.deprecated == false){
            console.log({ "missing": thisData.rule});
           
            
            
        }
        
    });
}).catch(display); 
   



