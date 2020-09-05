const {Text , Relationship} = require('@keystonejs/fields');

module.exports = {
    fields:{
        Test:{
            type:Relationship,
            ref:'Test',
            isRequired:false,
            many:false,
        },
        number:{
            type: Text,
            isRequired: true
        },
        title:{
            type:Text,
            isRequired:true
        },
        shortDescriptionTm:{
            type:Text,

        },
        shortDescriptionRu:{
            type:Text,

        },
    }
}
