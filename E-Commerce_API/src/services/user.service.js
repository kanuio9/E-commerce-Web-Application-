const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExits = await User.findOne({ email });
        if (isUserExits) {
            throw new Error(`User already exists with given email ${email}`);
        }

        password = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password });

        console.log("created user" + user); 

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        // .populate("address");
        if (!user) {
            throw new Error("There is no user found with given id" + userId);
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("There is no user found with given email" + email);
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if (!user) {
            throw new Error("There is no user found with given id" + userId);
        }

        console.log("user" + user);

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers };