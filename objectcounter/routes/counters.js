//Imports
const { Router } = require('express');
const Counter = require('../model/Counter');

//Set the router
const router = Router();


//Set get route
router.get('/', async (req, res) => {
    try {
        const counters = await Counter.find();
        if (!counters) throw Error('No counters');
        res.status(200).json(counters);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Set post route
router.post('/createCounter', async (req, res) => {
    const { username} = req.body;
    const newAccount = new Counters({ username});
    try {
        const counter = await newAccount.save();
        if (!counter) throw Error('Something went wrong saving the new counter');
        res.status(200).json(counter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Set get route
router.post('/getCounterByAccount', async (req, res) => {
    try {
        const { username } = req.body;
        const counter = await Counter.findOne({"username": username});
        if (!counter) throw Error('No accounts');
        res.status(200).json(counter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Set delete route
router.delete("/:id", async (req, res) => {
    try {
        const counter = await Counter.findByIdAndDelete(req.params.id);
        if (!counter) throw Error('There was a problem deleting the transaction');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

//export the router
module.exports = router;
