const { Text , File  , Relationship , Select} = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');


const fileAdapter = new LocalFileAdapter({
    src: './public/uploads',
    path: '/public/uploads',

});

module.exports= {
    fields: {
        number: {
            type: Text,
            isRequired: true
        },
        title: {
            type: Text,
            isRequired: true,
        },
        descriptionTm: {
            type: Text,
            isRequired: true,
            isMultiline: true,
        },
        descriptionEn: {
            type: Text,
            isRequired: true,
            isMultiline: true,
        },
        image: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
            hooks: {
                beforeChange: async ({existingItem}) => {
                    if (existingItem && existingItem.file) {
                        await fileAdapter.delete(existingItem.file);
                    }
                },
                afterDelete: async ({existingItem}) => {
                    if (existingItem.file) {
                        await fileAdapter.delete(existingItem.file);
                    }
                },
            },
        },




    }
}
