const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
Tag.findAll({
  include: [{   // be sure to include its associated Product data
    model: Product,
    through: ProductTag,
  },
],
}).then((allTags) => {
  res.json(allTags);
}).catch((err) => res.json(err));


});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
Tag.findAll({
  where: {
    id: req.params.id,
  }, 
  include: [{   // be sure to include its associated Product data
    model: Product,
    through: ProductTag,
  },
],
}).then((tagById) => {
  res.json(tagById);
}).catch((err) => res.json(err));

 
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name, 
  }).then((newTag) => {
    res.json(newTag);
  }).catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
Tag.update({
  id: req.body.id,
  tag_name: req.body.tag_name,
},
{
  where: {
    id: req.params.id,
  },

}).then((updateTags)=> {
  res.json(updateTags);
}).catch((err) => res.json(err));

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((delTags)=> {
    res.json(delTags);
  }).catch((err) => res.json(err));
});

module.exports = router;
