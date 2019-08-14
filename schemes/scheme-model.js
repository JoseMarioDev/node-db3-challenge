const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id });
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function findSteps(id) {
  return db('schemes as s')
    .innerJoin('steps as t', 's.id', '=', 't.scheme_id')
    .select('s.id', 's.scheme_name', 't.step_number', 't.instructions')
    .where({ scheme_id: id });
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}
