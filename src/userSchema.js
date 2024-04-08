import mongoose from "mongoose";
import bcrypt from "bcrypt"
 

const DeliveryInfoSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    recievername: {
        type: String,
        required: true
    }
    
})

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        min:8
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    delivery: DeliveryInfoSchema
})

// This encrpt all our password before saving to database 
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

//This compare the login password before fetching from database
userSchema.methods.verifyPassword = async function(candidatePassword){
    try {
        
    } catch (error) {
        console.error(`This is a problem retrieving user with this password`);
        throw error;
        
    }
} 


const User = mongoose.model('User', userSchema)
export default User;