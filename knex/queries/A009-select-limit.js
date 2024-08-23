const knex = require('../config/database');
const selectLimit = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '%o')
    .orderBy('id', 'asc')
    .limit(5)
    .offset(10);

console.log(selectLimit.toString());

selectLimit.then((data) => {
    console.log(data);
}).catch(e => {
    console.log('error: ', e.message);
}).finally(() => {
    knex.destroy();
})