
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {name: 'The Phantom'},
        {name: 'Christine'},
        {name: 'Roul'},
        {name: 'The Persian'},
        {name: 'Meg'},
        {name: 'Madam Giry'},
        {name: 'Mama Valerius'},
        {name: 'Count Philippe'},
        {name: 'Moncharmin'},
        {name: 'Richard'},
        {name: 'Darius'},
      
      ]);
    });
};
