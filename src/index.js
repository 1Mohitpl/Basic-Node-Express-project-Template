const express = require("express");
const app = express();
const {serverConfig} = require("./config");
const apiroutes = require('./routes')

app.use('/api', apiroutes);


app.listen(serverConfig.PORT, ()=> {

    console.log(`server is running on Port : ${serverConfig.PORT}`);
    
})