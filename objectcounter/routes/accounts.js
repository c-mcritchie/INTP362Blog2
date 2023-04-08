//Imports
const { Router } = require('express');
const Account = require('../model/Account');

//Set the router
const router = Router();


//Set get route
router.get('/', async (req, res) => {
    try {
        const accounts = await Account.find();
        if (!accounts) throw Error('No accounts');
        res.status(200).json(accounts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Set get route
router.get('/:username', async (req, res) => {
    try {
        const account = await Account.findOne({username: req.params.username});
        if (!account) throw Error('No account found');
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Set post route
router.post('/createAccount', async (req, res) => {
    const { username, counters} = req.body;
    const newAccount = new Account({ username, counters });
    try {
        const account = await newAccount.save();
        if (!account) throw Error('Something went wrong saving the account');
        res.status(200).json(account);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Set get route
router.post('/findAccount', async (req, res) => {
    try {
        const { username } = req.body;
        const account = await Account.findOne({"username": username});
        if (!account) throw Error('No accounts');
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//set PUT route
router.put('/', async (req, res) => {
    try {
        const { account } = req.body;
        const foundAccount = await Account.findOne({"_id": account._id});
        foundAccount.counters = account.counters;
        await foundAccount.save();
        if (!account) throw Error('No account found to update');
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


//Set delete route
router.delete("/:id", async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) throw Error('There was a problem deleting the transaction');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

//export the router
module.exports = router;
