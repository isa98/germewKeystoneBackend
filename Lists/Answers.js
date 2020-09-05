const {Text , Relationship} = require('@keystonejs/fields');

module.exports={
    fields:{
        Question:{
            type:Relationship,
            ref:'Question',
            many:false,
            isRequired:true,
        },
        number:{
            type:Text,
            isRequired: true,
        },
        title:{
            type:Text,
            isRequired:true,
        },
        shyk:{
            type:Text,
            isRequired:true,
        }
    }
}
