const { getItems , getItem } = require('@keystonejs/server-side-graphql-client');
const { keystone } = require('../index');

exports.getAllLevels= async(req , res ) =>{
    const allLevels = await getItems({
        keystone,
        listKey:'Level',
        returnFields:'id,title,file'
    })

    res.send(allLevels);
}
