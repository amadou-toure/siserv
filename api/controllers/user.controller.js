const bCrypt = require('bcrypt');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: `Error: ${error}` });
    }
};

const createUser = async (req, res) => {
    console.log(req.body)
    try {
        const hashedPassword = await bCrypt.hash(req.body.PASSWORD, 10);

        const user = new userModel({
            ...req.body,
            PASSWORD: hashedPassword,
        });

        const result = await user.save();

        if (result) {
            res.json({ message: `User ${req.body.NOM} created successfully` });
        } else {
            res.json({ message: 'Error during creation' });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'An error occurred during user creation' });
    }
};

const login = async (req, res) => {
    const { USERNAME, PASSWORD } = req.body;

    try {
        const user = await userModel.findOne({ USERNAME });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bCrypt.compare(PASSWORD, user.PASSWORD);

        if (passwordMatch) {

            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: 'Updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const getOneUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    login,
};
