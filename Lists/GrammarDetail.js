const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');



module.exports= {
    fields: {
        punkt:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        example1:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        example2:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        example3:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        grammar:{
            type:Relationship,
            ref:'Grammar.detail',
            //refPath:'title',
            isRequired:true,
            many:false,
        }
        


    },
    labelField: 'punkt',
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
