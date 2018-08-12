const express = require('express');
const router = express.Router();

//Model User
const User = require('../../models/User');

// GET api/users, GET all Users, Public
router.get('/', (req, res) => {

    User
        .find()
        .then(users => {
            res.json(users)
            console.log('Getting all users')
        })
        console.log('Testing something out')
});

// GET api/users/:id, GET one USER, Public
router.get('/:id', (req, res) => {

    User
        .findById(req.params.id)
        .then(user => {
            res.json(user)
            console.log(`Getting user ${user.fname} with ID ${user.id}`)
        })
        
});

// POST api/users, Create an User, Public
router.post('/', (req, res) => {

    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname
    });

    newUser
        .save()
        .then(user => {
            res.json(user)
            console.log(`Adding user ${newUser.fname} with ID ${newUser.id}`)
        });

});

// Delete api/users/:id, Delete an User, Public
router.delete('/:id', (req, res) => {
    
    User
        .findById(req.params.id)
        .then(user => {
            console.log(`Deleting user ${user.fname} with ID ${user.id}`);
            user.remove().then(() => {
                res.json({success: true})    
            })
        })
        .catch(err => {
            res.status(404).json({success: false});
        })        
});

// UPDATE api/users, Change firstname and lastname
router.put('/:id', function (req, res) {
    User
        .findByIdAndUpdate(req.params.id, {
            fname: req.body.fname,
            lname: req.body.lname
        })
        .then(user => {
            console.log(`Updating user ${user.id}`);
            res.json(user)
        })
        
});

module.exports = router;
