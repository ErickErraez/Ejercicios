exports.seed = function (knex, Promise) {
    return knex('animal').insert([{
        nombre: 'Pancho',
        raza: 'gato mestizo',
        edad: '2 años',
        color: 'Blanco'
    },
    {
        nombre: 'Lucas',
        raza: 'Pudle',
        edad: '3 años',
        color: 'Blanco con Cafe'
    },

    ]);
};