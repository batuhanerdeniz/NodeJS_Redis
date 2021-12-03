const redis = require("redis");
const client = redis.createClient()

client.on("error", error => {console.error();} );


// Set

client.set("name", "batu", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Message", message);
});

// Get

client.get("name", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Message", message);
});