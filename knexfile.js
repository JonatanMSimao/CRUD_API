// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
      connection: {
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'CRUD'
      },
      useNullAsDefault: true,
   },

};
