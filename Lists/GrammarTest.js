const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');



module.exports= {
    fields: {
        number:{
            type:Text,
            isRequired:true,
           
           
        },
        color:{
            type:Text,
            isRequired:true,
            
           
        },
       
        grammar:{
            type:Relationship,
            ref:'Grammar.test',
            //refPath:'title',
            isRequired:true,
            many:false,
        }
        


    },
    labelField: 'number',
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
