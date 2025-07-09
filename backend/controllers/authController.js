const User = require('../models/user');

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {return res.status(400).json({ message: "All fields are required" });}


        const existingUser = await User.findOne({ email })
        if(existingUser) return res.status(404).json({message: "Email is already exist"});

        const newUser = new User({name, email, password})
        await newUser.save();


        res.status(200).json({message: "sign up successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error sign up", error });
    }
}

exports.logInUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email, !password){return res.status(404).json({message: "All fields is required"})}

        const checkCredentials = await User.findOne({email, password});
        if(!checkCredentials) return res.status(404).json({message: "Invalid credentials"});

        res.status(200).json({message: "Log in successfully"});

    } catch (error) {
        res.status(500).json({ message: "Error Log in", error });
    }
}