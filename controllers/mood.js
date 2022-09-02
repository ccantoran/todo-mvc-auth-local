const Mood = require('../models/Mood')


module.exports = {
    createMood: async (req, res) => {
        try{
            await Mood.create({ mood: req.body.moodHere, userId: req.user.id})
            //i think ^ needs to be what we will be putting in the document
            //needs to match the schema
            console.log('Mood has been added')
            res.redirect('/todos')
            //my understanding that /todos will direct to the todos ejs file
        }catch(err){
            console.log(err)
        }
    },
    getMood: async (req,res)=>{
        console.log(req.mood)
        try{
            // const todoItems = await Todo.find({userId:req.user.id})
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const moodC = await Mood.find({userId: req.user.id})
            
            // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
            res.render('todos.ejs', {userMood: moodC, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
}

//things we ve learned so far:
//we cant comment out ejs basically. The doc will think its still live
//the ejs variables on the ejs doc will be definited in the contollers
// res.render('todos.ejs', {Variable that will go in the index : the variable that we defined rn })
// user.userName
// left