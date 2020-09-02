const { Text,  } = require('@keystonejs/fields');


module.exports={
    fields:{
        tm: {
            type: Text,
            isRequired:true,
            isUnique:true,


        },
        ru: {
            type: Text,
            isRequired:true,
            isUnique:true,

        },
        en: {
            type: Text,
            isRequired:true,
            isUnique:true,

        },
        slug: {
            type: Text,
            isRequired:true,
            isUnique:true,

        },
    },

}
