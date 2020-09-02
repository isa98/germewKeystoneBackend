const { getItems , getItem } = require('@keystonejs/server-side-graphql-client');
const { keystone } = require('../index');


exports.getAllLevels= async (req , res )=>{

    const allUsers = await getItems({ keystone, listKey: 'Level', returnFields: 'tm , ru , en , slug' });
    res.send(allUsers);
}


