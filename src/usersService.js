import User from "./userSchema.js";
import bcrypt from "bcrypt"

export  const userService = {
    GetAllUser: async () => {
        try {
            const allUser = User.find()
            return allUser
        } catch (error) {
            console.log(error);
            throw error
        }
       
    },
   CreateUser: async (args) => {
    try {
        let user = new User({...args.input})
        await user.save()
        return user
    } catch (error) {
        console.log(error);
        throw error
    }
   },

//    UpdateUser: async (args) => {
//     try {
//         let updatedUser = await User.findById(id)
//     } catch (error) {
//         console.log('This user info can not be update');
//         throw error;
//     }
//    },

   LoginUser: async (username, password) => {

    try {
    let user = await User.findOne({username})
    if(!user){
        console.log(`no user with the username ${username}`);
    }
    let comparedPassword = await bcrypt.compare(password, user.password)
    if(!comparedPassword){
        console.log('username with this password does not match');
    }
    return user
    } catch (error) {
        console.log('This user cannot be authenticated ');
        throw error
    }
    
   }  

}