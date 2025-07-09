const User = require('../models/user');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error getting users", error });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: "user not found"});

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error getting user", error });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {name, email, password},
            {new: true}
        );
        if(!user) return res.status(404).json({message: "User not found"});
        
        res.status(200).json({message: "user updated", user})

    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}

exports.deleteUser = async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({message: "User not found"})
        
        res.status(200).json({message: "user deleted"});
    } catch (error) {
        res.status(500).json({ message: "Error delete user", error });
    }
}
