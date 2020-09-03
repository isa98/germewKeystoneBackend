const { getItems , getItem } = require('@keystonejs/server-side-graphql-client');
const { keystone } = require('../index');


exports.getAllGrammars= async (req , res )=>{

    const allUsers = await getItems({ keystone, listKey: 'Grammar', returnFields: 'level , title' });
    res.send(allUsers);
}


