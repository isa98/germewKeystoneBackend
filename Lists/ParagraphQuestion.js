const {Text , Relationship} = require('@keystonejs/fields');

module.exports = {
    fields:{
        Paragraph:{
            type:Relationship,
            ref:'Paragraph',
            isRequired:true,
            many:false
        },
        number:{
            type:Text,
            isRequired: true
        },
        title:{
            type:Text,
            isRequired:true
        }
    }
}
