const express = require('express');
const cors = require('cors');
const app = express();

const whitelist =['http://127.0.0.1:3000/','http://127.0.0.1:3100/','http://3.142.94.241:3100','https://yournoteserver.herokuapp.com/','http://127.0.0.1:5500/','https://frosty-heisenberg-f781a3.netlify.app/'];

const corsOptionsDelegate = (req,callback)=>{
    var corOptions
    corOptions = {origin:true}
    // if(whitelist.indexOf(req.header('Origin')!==-1)){
    //     corOptions = {origin:true}
    // }
    // else{
    //     corOptions = {origin:false}
    // }
    callback(null, corOptions);
}

exports.cors=cors();
exports.corsWithOptions=cors(corsOptionsDelegate);