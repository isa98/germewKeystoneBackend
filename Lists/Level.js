const { Text , File } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');


const fileAdapter = new LocalFileAdapter({
    src: './files',
    path: '/files',
});

module.exports={
    fields:{
        title:{
            type:Text,
            isRequired:true,

        },
        file: {
            type: File,
            adapter: fileAdapter,

        },



    },


}
