import { User } from "../entity/User";
import { AppDataSource } from "../data-source";


class UserService {

    async getUsers(req, res){
        try {
            const users = await AppDataSource.getRepository(User).find();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async addUser(req){
        try {
            const newUser = await AppDataSource.getRepository(User).create(req);
            const result = await AppDataSource.getRepository(User).save(newUser);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserById(userId) {
        const userRepository = await AppDataSource.getRepository(User);
        return userRepository.findOne(userId);
      }
}


module.exports = new UserService();