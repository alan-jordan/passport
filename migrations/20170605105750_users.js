
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.string('user_username')
    table.string('user_email')
    table.string('user_twitter_id')
    table.binary('user_hashed_password')
    table.date('user_date_registered').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
