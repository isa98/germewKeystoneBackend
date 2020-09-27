const { Text , Relationship } = require('@keystonejs/fields');


module.exports={
    fields:{
        level:{
            type:Relationship,
            ref:'Level.grammar',
            isRequired:true,
            many:false,
            
        },
        number:{
          type:Text,
          isRequired:true,
        },
        title:{
            type:Text,
            isRequired:true,
        },
        clarificationTm:{
            type:Text,
            isRequired:true,
            isMultiline:true
        },
        clarificationEn:{
            type:Text,
            isRequired:true,
            isMultiline:true
        },
        

    },
    labelField: 'title'

}
