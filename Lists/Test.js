const { Text , Checkbox , Relationship } = require('@keystonejs/fields');


module.exports={
    fields:{
        Grammar:{
            type:Relationship,
            ref:'Grammar',
            isRequired:true,
            many:false
        },
        QuestionNumber:{
            type:Text,
             isRequired:true,

        },
        QuestionTitle:{
            type:Text,
            isRequired:true,

        },
        a:{
            type:Text,
            isRequired:true,

        },
        b:{
            type:Text,
            isRequired:true,

        },
        c:{
            type:Text,
            isRequired:true,

        },
        d:{
            type:Text,
            isRequired:true,

        },
        TrueAnswer:{
            type:Text,
             isRequired:true,

        }

    },


}
