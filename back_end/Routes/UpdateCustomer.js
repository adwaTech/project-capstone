const types = require("../models/types");
const { UserModel, UserSchema } = require("../models/Users");
const { createModel, updateModel } = require('./toolFuntions')
module.exports = async (req, res) => {
    // update customer
    // requires authentication
    // can update some fields
    // can update other customers if an admin
    // WARNING!!! Empty fields are not checked!
    const user = await UserModel.findById(req.user._id);
    if (req.file)
        req.body.profileImage = req.file.filename;
    if (user.userType === types.userType[1]) { // admin can edit any customer
        if (req.body.userId) {
            const editable = UserModel.findById(req.body.userId);
            updateModel(req.body, editable, UserSchema, [
                'firstName',
                'lastName',
                'profileImage',
                'latitude',
                'longtude',
                'city',
                'password',
            ]);
            await editable.save();
            return res.send(editable)
        } else return res.status(400).send({
            error: 'req.body.userId is required!'
        })
    }
    else if (user.userType === types.userType[0]) { // can only edit his own data
        console.log(req.body);
        updateModel(req.body, user, UserSchema, [
            'firstName',
            'lastName',
            'profileImage',
            'latitude',
            'longtude',
            'city',
            'password',
        ]);
        await user.save();
        return res.send(user);
    }
    return res.status(500).send({
        error: 'Internal Server Error'
    });
}