const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user')
    .then((data) => res.json(data));
});

// Create
router.post('/new', function(req, res, next){
  knex('user')
    .insert(req.body)
    .then(()=> {
      knex('user')
        .then((data) => res.json(data))
    });
});

// Edit
router.patch('/edit/:id', function(req, res, next){
  knex('user')
    .update(req.body)
    .where('id', req.params.id)
    .then(()=> {
      knex('user')
        .then((data) => res.json(data))
    });
});

// Delete
router.delete('/delete/:id', function(req, res, next){
  knex('user')
    .delete()
    .where('id', req.params.id)
    .then(()=> {
        knex('user')
          .then((data) => res.json(data))
    });
});

module.exports = router;
