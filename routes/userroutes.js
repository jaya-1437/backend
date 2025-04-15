const express = require('express');
const {
  register,
  login,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/usercontroller');

const validate = require('../middlewares/validatemiddleware');
const { registerSchema, loginSchema } = require('../schemas/userschema');

const router = express.Router();

// ✅ MOVE THIS TO THE TOP
router.get('/test', (req, res) => {
  res.json({ message: 'User route working!' });
});

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
