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

const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});

module.exports= {
    fields: {
        title:{
            type:Text,
            isRequired:true,
            isUnique:true,
        },
        image: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
            
        },
        grammar:{
            type:Relationship,
            ref:'Grammar.level',
            //refPath:'title',
            isRequired:true,
            many:true,
        }
        


    },
    labelField: 'title',
    // List-level access controls
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}
