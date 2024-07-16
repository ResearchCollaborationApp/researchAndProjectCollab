const express = require('express')
const router = express.Router()
const {
   getAllUsers ,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')


//GET a user
router.get('/', getAllUsers)

//GET a single user
router.get('/:id',getUser)

//POST a new user
router.post('/', createUser)

//DELETE a user
router.delete('/:id',deleteUser)

//UPDATE a user
router.patch('/:id',updateUser)

module.exports = router