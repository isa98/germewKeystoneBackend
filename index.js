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
const TestList = require('./Lists/Test');
const TestTypeList = require('./Lists/TestType');
const QuestionList = require('./Lists/Questions');
const AnswerList = require('./Lists/Answers');
const ResultList = require('./Lists/Result');
const ParagraphList = require('./Lists/Paragraph');
const ParagraphQuestionList = require('./Lists/ParagraphQuestion');
const ParagraphAnswerList = require('./Lists/ParagraphAnswer');
const ParagraphResultList = require('./Lists/Paragraph');


const keystone =  new Keystone({
    adapter: new MongooseAdapter({ mongoUri: db.url }),
    onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User',UserList);
keystone.createList('Level',LevelList);
keystone.createList('Grammar',GrammarList);
keystone.createList('TestType',TestTypeList);
keystone.createList('Test',TestList);
keystone.createList('Question',QuestionList);
keystone.createList('Answer',AnswerList);
keystone.createList('Result',ResultList);
keystone.createList('Paragraph',ParagraphList);
keystone.createList('ParagraphQuestion',ParagraphQuestionList);
keystone.createList('ParagraphAnswer',ParagraphAnswerList);
keystone.createList('ParagraphResult',ParagraphResultList);




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
