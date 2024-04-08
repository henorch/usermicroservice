import { userService } from "./usersService.js";


const resolvers = {
  Query: {
    getAllUser: async () => {
      try {
        const allUser = await userService.GetAllUser()
        return allUser
      } catch (error) {
        console.log(error);
        throw error
      }
    }
  },

  Mutation: {
    createNewUser: async (_, args) => {
      try {
        const user = await userService.CreateUser(args);
        return user
      } catch (error) {
        console.log(error);
        throw error
      }
    },
    loginUser: async (_, {username, password}) => {
      try {
        const user = await userService.LoginUser(username, password)
        return user
      } catch (error) {
        console.log(`username doesnot exist`);
        throw error
      }
    }
  }
}

export default resolvers;