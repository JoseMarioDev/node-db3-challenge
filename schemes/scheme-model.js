const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  // findSteps,
  add,
  // update,
  // remove,
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

// function getUserPosts(id) {
//   return db('posts as p')
//     .innerJoin('users as u', 'p.user_id', '=', 'u.id')
//     .select('p.id', 'p.contents', 'u.username as postedBy')
//     .where({ user_id: id });
// }

// function update(id, changes) {
//   return db('users')
//     .where({ id })
//     .update(changes);
// }

// function remove(id) {
//   return db('users')
//     .where({ id })
//     .del();
// }
