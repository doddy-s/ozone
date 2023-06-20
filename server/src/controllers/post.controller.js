const { Post } = require('../../sequelize/models');

exports.createPost = async (req, res) => {
  try {
    const { tag, up, down, content, media, userId, communityId } = req.body;

    const post = await Post.create({
      tag,
      up,
      down,
      content,
      media,
      userId,
      communityId
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};