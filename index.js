const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const initialiseData = require('./initial-data');
const db = require('./DBConfig/db.config');
const UserList = require('./Lists/User');
const LevelList = require('./Lists/Level');
const GrammarList = require('./Lists/Grammar');
const InferenceList = require('./Lists/Inference');
const GrammarDetailList = require('./Lists/GrammarDetail');
const GrammarTestList = require('./Lists/GrammarTest');


const keystone =  new Keystone({
    adapter: new MongooseAdapter({ mongoUri: db.url }),
    onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User',UserList);
keystone.createList('Level',LevelList);
keystone.createList('Grammar',GrammarList);



const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
});

module.exports = {
    keystone,
    apps: [
        new GraphQLApp({
            apiPath: '/admin/api',
            graphiqlPath: '/admin/graphiql',
        }),
        new AdminUIApp({
            adminPath: '/admin',
            name: "Germew",
            enableDefaultRoute: true,
            authStrategy,
        }),
        new StaticApp({
            path: '/public/uploads',
            src: './public/uploads',

        }),
    ],

};
