const { getItems , getItem } = require('@keystonejs/server-side-graphql-client');
const { keystone } = require('../index');

exports.getAllLevels= async(req , res ) =>{

    const {data , errors} = await keystone.executeGraphQL({
        query:` query {
                  allLevels {
                      id,title,file{
                      id,publicUrl
                                   }
                           }
                    }`
    });
    const allLevels = data;
    res.send(allLevels);
}
