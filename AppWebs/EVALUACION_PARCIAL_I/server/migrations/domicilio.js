exports.up = function(knex, Promise) {
    return knex.schema.createTable('domicilio', function(t) {

        
        t.bigIncrements('id');
        t.string('ciudad').notNullable();
        t.string('parroquia').notNullable();
        t.string('domicilio').notNullable();
        t.string('referencia').notNullable();

    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('domicilio');
};