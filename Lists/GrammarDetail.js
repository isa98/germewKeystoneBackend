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


module.exports= {
    fields: {
        grammar:{
            type:Relationship,
            ref:'Grammar.detail',
            //refPath:'title',
            isRequired:true,
            many:false,
        },
        punkt:{
            type:Text,
            isRequired:true,
            
           
        },
        example1:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        example2:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
        example3:{
            type:Text,
            isRequired:true,
            isUnique:true,
           
        },
       
        


    },
    labelField: 'punkt',
    access: {
        read: access.userIsAdmin,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
