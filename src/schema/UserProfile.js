const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    user_id:{ type: Schema.Types.ObjectId, ref:'user'},
        college_name: String,
        address: String,
        phone_number: String,
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);