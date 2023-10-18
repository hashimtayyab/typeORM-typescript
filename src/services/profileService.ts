import { Profile } from "../entity/Profile";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class ProfileService {
  async getProfiles(req, res) {
    try {
      const profile = await AppDataSource.getRepository(Profile).find();
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  async addProfile(req, userId) {
    try {
      const profileRepository = AppDataSource.getRepository(Profile);
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      const { country, city } = req;
      const newProfile = profileRepository.create({
        country,
        city,
        user,
      });

      await profileRepository.save(newProfile);

      return newProfile;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProfileService();
