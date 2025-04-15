const jwt = require('jsonwebtoken');
const users = [];
exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = { id: users.length + 1, username, password };
  users.push(user);
  res.status(201).json(user);
};
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
  res.json({ token });
};
exports.getUsers = (req, res) => {
  res.json(users);
};
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  Object.assign(user, req.body);
  res.json(user);
};
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};