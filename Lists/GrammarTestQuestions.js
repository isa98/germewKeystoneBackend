const { Text , File  , Relationship , Select,Checkbox} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
    if (!user) {
        return false;
    }

    // Instead of a boolean, you can return a GraphQL query:
    // https://www.keystonejs.com/api/access-control#graphqlwhere
    return { id: user.id };
};

const userIsAdminOrOwner = auth => {
    const isAdmin = access.userIsAdmin(auth);
    const isOwner = access.userOwnsItem(auth);
    return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };


module.exports= {
    fields: {
        number:{
            type:Text,
            isRequired:true,
        },
        test:{
            type:Relationship,
            ref:'GrammarTest.question',
            many:false,
            isRequired:true
        },
        title:{
            type:Text,
            isRequired:true,

        },
        answer1:{
            type:Text,
            isRequired:true
        },
        answer1Clarification:{
            type:Text,
            isRequired:true,
            isMultiline:true,
        },
        answer1Result:{
            type:Checkbox,
         

        },
        answer2:{
            type:Text,
            isRequired:true
        },
        answer2Clarification:{
            type:Text,
            isRequired:true,
            isMultiline:true,
        },
        answer2Result:{
            type:Checkbox,
          

        },
        answer3:{
            type:Text,
            isRequired:true
        },
        answer3Clarification:{
            type:Text,
            isRequired:true,
            isMultiline:true,
        },
        answer3Result:{
            type:Checkbox,
            

        },
        answer4:{
            type:Text,
            isRequired:true
        },
        answer4Clarification:{
            type:Text,
            isRequired:true,
            isMultiline:true,
        },
        answer4Result:{
            type:Checkbox,
           

        },

    },
    labelField: 'number',
    access: {
        read: access.userIsAdmin,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}