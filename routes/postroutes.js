const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postcontroller');
const auth = require('../middlewares/authmiddleware');
const validate = require('../middlewares/validatemiddleware');
const { postSchema } = require('../schemas/postschema');

const router = express.Router();

router.use(auth); // All routes below require authentication

router.post('/', validate(postSchema), createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;