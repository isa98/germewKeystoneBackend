const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');
const db = require('./DBConfig/db.config');

const LevelList = require('./Lists/Level');
const UserList = require('./Lists/User');

const GrammarList = require('./Lists/Grammar');


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
        new GraphQLApp(

        ),
        new AdminUIApp({
            adminPath: '/admin',
            name: "Germew",
            enableDefaultRoute: true,
            authStrategy,
        }),
    ],

};
