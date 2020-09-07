const  {Text , Relationship , Checkbox} = require('@keystonejs/fields');

module.exports = {
    fields:{
        Answer: {
            type:Relationship,
            ref:'ParagraphAnswer',
            isRequired:true,
            many:false
        },
        trueOrfalse:{
            type: Checkbox,
        },
        clarificationTm: {
            type:Text,
            isRequired: true,
            isMultiline:true
        },
        clarificationEn: {
            type:Text,
            isRequired:true,
            isMultiline:true
        }
    }
}

