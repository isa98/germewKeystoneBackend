const  {Text , Relationship , File} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});
module.exports = {
    fields:{
        Level:{
            type:Relationship,
            ref:'Level',
            many:false,
            isRequired:true,
        },
        number:{
            type: Text,
            isRequired:true
        },
        title:{
            type:Text,
            isRequired:true,
        },
        image:{
            type:File,
            adapter:fileAdapter,
            isRequired: true
        },
        body:{
            type:Text,
            isMultiline:true,
            isRequired:true
        }

    }
}
