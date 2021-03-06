const { Text , Relationship , Select,File } = require('@keystonejs/fields');
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
    { value: '#CD697E', label: "Gonur" },
    { value: '#FC8481', label: 'Oranjiwy' },
    { value: '#4C8FEB', label: "Gok" },
    { value: '#8481F9', label: "Siren" },
    { value: '#FCC299', label: 'Malocny' },
  ];
  const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});
module.exports={
    fields:{
        level:{
            type:Relationship,
            ref:'Level.topic',
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
            type:Select,options, dataType: 'string',
            isRequired:true
        },
        image: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
            
        },
        description:{
            type:Text,
            isRequired:true,
            isMultiline:true
        },
        question:{
            type:Relationship,
            ref:'ReadingTopicQuestion.topic',
            many:true,
            
        }
    },
    labelField: 'title',
    access: {
        read: access.userIsAdmin,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
        auth: true,
    },
}