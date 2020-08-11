import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();                   // campo auto incremento
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}
// metodo down se algo deu errado na tabela, podendo voltar atrás.
export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
} 