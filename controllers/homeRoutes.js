const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Gets the Homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username']}]
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Individual Posts
router.get('post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params.id, {
            include: [
                {model: User, attributes: ['username']},
                {
                    model: Comment,
                    include: [{model: User, attributes: [username]}],
                }
            ]
        });

        const post = postData.get({plain: true});
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Dashboard usage
router.get('./dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            include: [{model: User, attributes: ['username']}],
        })

        const posts = postData.map((post) => post.get({plain: true}))
        res.render('dashboard', {
            posts,
            logged_in: res.session.logged_in,
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    };
    res.render('login');
});

router.get('./signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    };
    res.render('signup');
});

router.get('/newpost', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/newpost');
        return;
    };
    res.render('login');
});

router.get('/editpost/:id', async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params,id, {
            include: [
                {model: User, attributes: ['username']},
                {
                    module: Comment,
                    include: [{model: User, attributes: ['username']}],
            },
            ],
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
