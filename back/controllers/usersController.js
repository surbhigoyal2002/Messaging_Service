const User = require("../model/userModel");
const brcypt = require("brcypt");


module.exports.register =(req,res,next) => {
    const{ username, email, password } = req.body;
    const usenamecheck = await User.findOne({username});
    if(usernameCheck)
    return res.json({msg:"Username already used", status:false});
    const emailcheck = await User.findOne({email});
    return res.json({msg:"Email already used", status:false});
    const hashedPassword = await brcypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });
    delete user.passsword;
    return res.json({ status: true})
};

