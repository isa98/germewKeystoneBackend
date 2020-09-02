const express = require('express');
const { keystone, apps } = require('./index.js');
const db = require('./DBConfig/db.config');
const router = require('./Routes/Routes');
const test = require('./Controllers/LevelController');

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

        app.get('/test',(req , res)=>{
            res.send('Hello isa');

        })



    });
