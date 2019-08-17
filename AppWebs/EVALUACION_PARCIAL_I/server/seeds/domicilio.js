exports.seed = function (knex, Promise) {
    return knex('domicilio').insert([{
        ciudad: 'Quito',
        parroquia: 'Guamani',
        domicilio: 'calle Geovanny Benitez',
        referencia: 'Nueva Maternidad'
    },
    {
        ciudad: 'Quito',
        parroquia: 'Chillogallo',
        domicilio: 'Santa Rosa',
        referencia: 'Canchas Santa Rosa'
    },

    ]);
};