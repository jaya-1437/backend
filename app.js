const express = require('express');
const userRoutes = require('./routes/userroutes');
const postRoutes = require('./routes/postroutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up and running now!');
  });
  

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;