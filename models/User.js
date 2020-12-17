const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        nom:{
            type : String,
            required : true
        },
        age:Number,
       // favoriteFoods:{'array of strings (*)'}
    }
)

module.exports=mongoose.model('User',userSchema)