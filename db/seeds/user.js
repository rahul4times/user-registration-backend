
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          fname: 'Robin',
          lname: 'Hood',
          email: 'robinhood@gmail.com',
          phone: '123-123-1234',
          dob: '12-01-1985',
          ssn: '111-11-1111',
          address: '123 Robin Hood St.',
          city: 'Charlotte',
          zip: '28105',
          state: 'NC',
          country: 'USA'
        },
        {
          fname: 'James',
          lname: 'Bond',
          email: 'james@gmail.com',
          phone: '000-000-0000',
          dob: '12-01-1985',
          ssn: '000-00-0000',
          address: '123 James Bond St.',
          city: 'Hollywood',
          zip: '28105',
          state: 'CA',
          country: 'USA'
        }
      ]);
    });
};
