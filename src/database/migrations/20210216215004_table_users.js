
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('nome').notNull()
    table.string('email').unique().notNull()
    table.string('password').notNull()
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
