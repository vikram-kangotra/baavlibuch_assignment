import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: String,
    friendId: String,
    friendList: Array
});

const User = mongoose.model('User', userSchema);

export default User;
