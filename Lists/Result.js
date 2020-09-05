const {Text , Relationship , Checkbox} = require('@keystonejs/fields');

module.exports = {
    fields:{
        Answer:{
            type:Relationship,
            ref:'Answer',
            many:false,
            isRequired:true,
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
