const knex = require('../config/database');
const data = [
    {
        first_name: 'Julio Cesar',
        last_name: 'Fernandes',
        email: 'juliobrinha@hotmail.com',
        password_hash: 'Julio@1234',
        salary: 12937.34,
    },
    {
        first_name: 'Marcella Carvalho',
        last_name: 'Araujo',
        email: 'perollagabi84@gmail.com',
        password_hash: 'marcellac10',
        salary: 1394.56,
    },
];

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('error: ', e.message);
}).finally(() => {
    knex.destroy();
})