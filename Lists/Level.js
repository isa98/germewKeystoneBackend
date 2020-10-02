const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');


const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});

module.exports= {
    fields: {
        title:{
            type:Text,
            isRequired:true,
            isUnique:true,
        },
        image: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
            
        },
        grammar:{
            type:Relationship,
            ref:'Grammar.level',
            //refPath:'title',
            isRequired:true,
            many:true,
        }
        


    },
    labelField: 'title',
    // List-level access controls
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
