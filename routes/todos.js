const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const moodController = require('../controllers/mood') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)




/////////////////////////////////////Catherine Section////////////////////////////////////
router.post('/createMood', moodController.createMood)

////////////////////////////////////Catherine Section/////////////////////////////////////

module.exports = router


//basically i learned that the same page needs to have the same route file
//they can have different controller file and model schema folder but same route folder