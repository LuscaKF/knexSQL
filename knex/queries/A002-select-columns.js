const knex = require('../config/database');

const select = knex('users')
    .select('u.email as uemail', 'u.id as uid');

console.log(select.toString());

select.then(data => {
    for (const user of data) {
        console.log(user.first_name)
    }
}).catch(e => {
    console.log('error: ', e.message);
}).finally(() => {
    knex.destroy();
})