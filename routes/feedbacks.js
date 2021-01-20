const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

router.get('/',  async (req, res) => {
   try {
        const feedbacks = await Feedback.find();
        res.setHeader('content-type', 'application/json');
        res.json(feedbacks);
    } catch(err) {
        res.json({err_message: err});
    }
})

router.post('/', async (req,res) => {
    const feedback = new Feedback({
        login: req.body.login,
        email: req.body.email,
        rating: req.body.rating,
        title: req.body.title,
        description: req.body.description
    });
    try {
        await feedback.save().then(()=> {
        });
        res.json(feedback);
    } catch(err) {
        res.json({err_message: err});
    }
});

module.exports = router;
