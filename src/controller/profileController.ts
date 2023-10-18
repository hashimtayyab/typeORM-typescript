const { getProfiles, addProfile } = require('../services/profileService');

class ProfileController{

    async getProfiles(req, res){
        try {
            const result = await getProfiles();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async addProfile(req, res){
        try {
            const result = await addProfile(req.body, req.params.userId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProfileController();