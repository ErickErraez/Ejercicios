exports.up = function(knex, Promise) {
    return knex.schema.createTable('animal', function(t) {

        
        t.bigIncrements('id');
        t.string('nombre').notNullable();
        t.string('raza').notNullable();
        t.string('edad').notNullable();
        t.string('color').notNullable();

    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('animal');
};