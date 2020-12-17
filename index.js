const mongoose = require('mongoose');
require('dotenv').config()
const userModel=require('./models/User')
mongoose.connect(process.env.CONNECTION,{ useUnifiedTopology: true,useUnifiedTopology: true })
.then(()=>{
    console.log('dbconnected')
    const user= new userModel(
        {
            nom:'errrerrrrnpmr',
            age:5,
            favoriteFoods: ['pizza','sandwich']
        }
    )
    user.save().then((user)=>console.log(user))
})
.catch((err)=>console.log(err.message))
