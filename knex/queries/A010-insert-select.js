const knex = require('../../knex/config/database');
const insert = knex(
  knex.raw(
    '?? (??, ??, ??)',
    ['profiles', 'bio', 'description', 'user_id']
  )
).insert((qb) => {
  qb.from('users').select(
    knex.raw(
      'concat("Bio de ", ??)',
      ['first_name']
    ), 
    knex.raw("concat('Description de', ' ', first_name)"), 
    'id'
  );
});

console.log(insert.toString());

insert.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});