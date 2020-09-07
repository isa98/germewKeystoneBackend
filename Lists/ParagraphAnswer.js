const {Text , Relationship} = require('@keystonejs/fields');

module.exports = {
   fields:{
       Question:{
           type:Relationship,
           ref:'ParagraphQuestion',
           isRequired:true,
           many:false
       },
       number:{
           type: Text,
           isRequired: true
       },
       title:{
           type:Text,
           isRequired:true
       }
   }
}
