const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');



module.exports= {
    fields: {
        inference:{
            type:Text,
            isRequired:true,
            isMultiline:true
        },
       
        grammar:{
            type:Relationship,
            ref:'Grammar.inference',
            //refPath:'title',
            isRequired:true,
            many:false,
        }
        


    },
    labelField: 'inference',
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
