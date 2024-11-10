const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
    try {
        
        const jwt = req.headers.authorization?.split(" ")[1];
        console.log("Headers:", req.headers);
        console.log("req ", jwt);
        if (!jwt) {
            return res.status(404).send({ error: "token not found" });
        }

        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).send(user);
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {

        const users = userService.getAllUsers();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
}

module.exports = { 
    getUserProfile,
    getAllUsers
};