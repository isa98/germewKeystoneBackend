const { Text , Relationship } = require('@keystonejs/fields');

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
        color:{
            type:Text,
            isRequired:true
        },
        inference:{
            type:Relationship,
            ref:'Inference.grammar',
            isRequired:true,
            many:false,
        },
        detail:{
            type:Relationship,
            ref:'GrammarDetail.grammar',
            isRequired:true,
            many:true,
        },
        test:{
            type:Relationship,
            ref:'GrammarTest.grammar',
            isRequired:true,
            many:true,
        }
        

    },
    labelField: 'title',
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
