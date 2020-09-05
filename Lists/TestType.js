const {Text , Relationship , File} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});

module.exports={
    fields:{
        Grammar: {
            type:Relationship,
            ref:'Grammar',
            isRequired:true,
            many:false
        },
        number:{
            type: Text,
            isRequired: true,
        },
        slug:{
            type:Text,
            isRequired:true
        },
        titleTk:{
            type:Text,
            isRequired:true,
        },
        titleEn:{
            type:Text,
            isRequired:true,
        },
        image:{
            type:File,
            adapter:fileAdapter
        },
        descriptionTm:{
            type:Text,
            isRequired:true,
            isMultiline:true
        },
        descriptionEn:{
            type:Text,
            isRequired:true,
            isMultiline:true
        }
    }
}
