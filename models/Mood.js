const mongoose = require('mongoose')


const MoodSchema = new mongoose.Schema ({
    mood:{
      type:String, 
      required: true,
    },
    userId: {
      type: String,
      required: true
    }
  })
  //again needs to match the controller action
  
  module.exports = mongoose.model('Mood', MoodSchema)
  //The 'Mood' will be the name of the collection name in MongoDB. But MongoDB will add an 's' at the end