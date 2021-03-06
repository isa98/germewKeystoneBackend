const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
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

const options = [
    { value: '#4AE0C6', label: "Yasyl" },
    { value: '#EB6085', label: "Gyzyl" },
    { value: '#FC8481', label: 'Oranjiwy' },
    { value: '#4C8FEB', label: "Gok" },
    { value: '#8481F9', label: "Siren" },
    { value: '#FCC299', label: 'Malocny' },
  ];

module.exports= {
    fields: {
        level:{
            type:Relationship,
            ref:'Level.vocabularyTest',
            //refPath:'title',
            isRequired:true,
            many:false,
        },
        number:{
            type:Text,
            isRequired:true,
           
           
        },
        color:{
            type:Select,options, dataType: 'string',
            isRequired:true,
            
           
        },
        question:{
            type:Relationship,
            ref:'VocabularyTestQuestion.VocabularyTest',
            many:true,
            
        }
       
        
        


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
