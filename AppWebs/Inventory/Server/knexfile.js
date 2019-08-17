;
const databaseData = {
    client: process.env.CLIENT || 'pg',
    connection: process.env.CONNECTION_DB || {
        host: 'localhost',
        port: '5432',
        user: 'prueba',
        password: '12345678',
        database: 'inventario'
    }
};

module.exports = {

    development: {
        migrations: { tableName: 'knex_migrations', directory: './database/migrations' },
        seeds: { directory: './database/seeds' },
        client: databaseData.client,
        connection: databaseData.connection

    },
};