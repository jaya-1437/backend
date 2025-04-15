const posts = [];

exports.createPost = (req, res) => {
  const post = {
    id: posts.length + 1,
    userId: req.user.id,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.status(201).json(post);
};

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
};

exports.updatePost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  Object.assign(post, req.body);
  res.json(post);
};

exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Post not found' });

  posts.splice(index, 1);
  res.json({ message: 'Post deleted' });
};
