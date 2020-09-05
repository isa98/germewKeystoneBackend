const { Text , Checkbox , Relationship } = require('@keystonejs/fields');


module.exports={
    fields:{
        Grammar:{
            type:Relationship,
            ref:'Grammar',
            isRequired:true,
            many:false
        },
        TestType:{
            type:Relationship,
            ref:'TestType',
            isRequired: true,
            many: false
        },
       number:{
            type:Text,
           isRequired:true,
       },
        TestTitle:{
            type:Text,
            isRequired:true,
        }

    },


}
