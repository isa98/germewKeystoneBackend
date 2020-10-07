const { Text , File  , Relationship , Select , Checkbox} = require('@keystonejs/fields');
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
const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});
module.exports={
fields:{
    VocabularyTest:{
        type:Relationship,
        ref:'VocabularyTest.question',
        isRequired:true,
        many:false,
    },
    questionTitle:{
        type:Text,

    },
    questionNumber:{
        type:Text,
        isRequired:true,

    },
    questionImage:{
        type: File,
        adapter: fileAdapter,
    },
    answer1Image:{
        type: File,
        adapter: fileAdapter,
    },
    answer1Title:{
        type:Text,
        isRequired:true
    },
    answer1Result:{
        type:Checkbox,
        
    },
    answer1Clarification:{
        type:Text,
        isRequired:true,
        isMultiline:true
    },
    answer2Image:{
        type: File,
        adapter: fileAdapter,
    },
    answer2Title:{
        type:Text,
        isRequired:true
    },
    answer2Result:{
        type:Checkbox,
        
    },
    answer2Clarification:{
        type:Text,
        isRequired:true,
        isMultiline:true
    },
    answer3Image:{
        type: File,
        adapter: fileAdapter,
    },
    answer3Title:{
        type:Text,
        isRequired:true
    },
    answer3Result:{
        type:Checkbox,
        
    },
    answer3Clarification:{
        type:Text,
        isRequired:true,
        isMultiline:true
    },
    answer4Image:{
        type: File,
        adapter: fileAdapter,
    },
    answer4Title:{
        type:Text,
        isRequired:true
    },
    answer4Result:{
        type:Checkbox,
        
    },
    answer4Clarification:{
        type:Text,
        isRequired:true,
        isMultiline:true
    },

    
},
labelField: 'questionTitle',
    access: {
        read: access.userIsAdmin,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}