exports.up = function(knex) {
  return knex.schema.createTable('alunos', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('nome').notNull();
    table.string('sobrenome').notNull();
    table.string('email').notNull();
    table.integer('idade').notNull();
    table.float('peso').notNull();
    table.float('altura').notNull();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('alunos');
}
