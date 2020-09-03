const express = require('express');
const { keystone, apps } = require('./index.js');
const db = require('./DBConfig/db.config');
const router = require('./Routes/Routes');


keystone
    .prepare({
        apps: apps,
        dev: process.env.NODE_ENV !== 'production',
    })
    .then(async ({ middlewares }) => {
        await keystone.connect();
        const app = express();

        app.use('/api',router);



        app.use(middlewares).listen(db.apiPort,()=>{
            console.log('Server is running' + db.apiPort);
        });
        // app.use(express.static(__dirname + '/files')); //Serves resources from public folder

        app.get('/test',(req , res)=>{
            res.send('Hello isa');

        })



    });
