const router = require('express').Router()
const Todo = require('../models/Todo')


router.get('/', (req, res) => {
    
   Todo.find().then(data => {
    res.json(data)
   }).catch(error => {
     res.json({meesage: error})
   })
})
router.post('/', (req, resp)=>{
    
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        createdOn: req.body.createdOn,
        done: false
    })
    todo.save().then(data => {
        resp.json(data)
    }).catch(error => {
        resp.json({message: error})
    })
})
router.patch('/:id', (req, res) => {
    Todo.updateOne({_id: req.params.id}, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            createdOn: req.body.createdOn,
            done: req.body.done
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json({message: error})
    })
})
router.delete('/:id' ,(req, res) => {
    Todo.deleteOne({_id: req.params.id})
    .then(data => {
 res.json(data)
    }).catch(error => {
        res.json({message: error})
    })
})

module.exports = router