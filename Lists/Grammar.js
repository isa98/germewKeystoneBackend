const { Text, Select } = require('@keystonejs/fields');
const { keystone } = require('../index');
const { getItems } = require('@keystonejs/server-side-graphql-client');

const options = [
    { value: 'YES', label: "Yes, I'll be there!" },
    { value: 'NO', label: "Sorry, I can't make it :(" },
    { value: 'MAYBE', label: 'Not sure yet' },
]






module.exports={
    fields:{
        /*levels:{
            type:Select,
            options,
            isRequired:true

        },*/
        slug:{
            type:Text,
            isRequired:true,
            isUnique:true,
        },
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

    },


}
