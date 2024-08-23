const knex = require('../config/database');

const select = knex('users').select('id', 'first_name')
    .where({ id: 2, first_name: 'Helena' });

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('error: ', e.message);
}).finally(() => {
    knex.destroy();
})