const router = require('express').Router();
const {Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}],
        })

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params.id, {
            include: [
                {model: User, attributes: ['username']},
                {
                    model: Comment,
                    include: [{model: User, attributes: ['username']}],
                },
            ],
        });
        if(!postData) {
            res.status(400).json({message: 'ERROR 400: No post with that id.'});
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(420).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {id: req.params.id}
        });
        id(!updatedPost) {
            res.status(400).json({message: 'ERROR 400: No post with that id.'})
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Comment.destroy({
            where: {post_id: req.params.id},
        });

        const deletePost = await Post.destroy({
            where: {id: req.params.id},
        });

        if(!deletePost) {
            res.status(400).json({message: 'ERROR 400: No post with that id.'});
        }
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
