const { Text , Relationship } = require('@keystonejs/fields');


module.exports={
    fields:{
        level:{
            type:Relationship,
            ref:'Level',
            isRequired:true,
            many:false,
        },
        title:{
            type:Text,
            isRequired:true,
            isUnique:true,


        }

    },


}
