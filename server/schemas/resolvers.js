const { AuthenticationError } = require("apollo-server-express");
const { User, Task, Stat } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return User.findAll();
        },
        me: async (parent, args, context) => {
            // console.log(context.user)
            if (context.user) {
                return User.findOne({ id: context.user.id });
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const userData = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });
            const token = signToken(userData);
            return { token, userData };
        },
        login: async (parent, { email, password }) => {
            const userData = await User.findOne({
                where: { email: email }
            });

            if (!userData) {
                throw new AuthenticationError("No user found with this email address");
            }

            const validPassword = await userData.checkPassword(password);

            if (!validPassword) {
                throw new AuthenticationError("Incorrect password");
                return
            }
            const token = signToken(userData);

            return { token, userData };
        },
    }
}

module.exports = resolvers