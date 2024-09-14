
const express = require('express');
const router = express.Router();

const checkUserExistsOrNot =  require('../controllers/checkUserExistsOrNot')
const getSkills  = require('../')

router.route('/skills')
.get((req,res)=> {
    const checkUserExistsOrNot = checkUserExistsOrNot(req.body.userId)
    if(!checkUserExistsOrNot) {
        res.status(401).json({message: "User is not authorized."})
    }
    res.status(200).json({skills:"test" })
})

module.exports = router;
