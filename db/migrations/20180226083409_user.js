
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.string('fname');
    table.string('lname');
    table.string('email');
    table.string('phone');
    table.string('dob');
    table.string('ssn');
    table.string('address');
    table.string('city');
    table.string('zip');
    table.string('state');
    table.string('country');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
