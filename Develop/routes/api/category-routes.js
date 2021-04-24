const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//example of this can be find starting on activity 7 week 13 -ORM
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
     // be sure to include its associated Products
    include: [Product],

  }).then((results) => {
    res.json(results);
  }).catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
Category.findAll({
  where: {
    id: req.params.id,
  }, 
// be sure to include its associated Products
  include: [Product],
}).then((results) => {
  res.json(results);
}).catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
   .then((results) => {
     res.json(results);
   }).catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    },

  }
  ).then((results) => {
    res.json(results);
  }).catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((results)=> {
    res.json(results);
  }).catch((err) => res.json(err));
});

module.exports = router;
