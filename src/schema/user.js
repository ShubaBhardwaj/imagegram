import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      username:{
            type: String,
            required: true,
            unique: true,
            minlength: 5,
      },
      email:{
            type: String,
            required: true,
            unique: true,
            minlength: 5,
            validater: {
                  validator: function (emailvalue) {
                        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
                  },
                  message: "Invalid email format",
            },
      },
      password:{
            type: String,
            required: true,
            unique: true,
            minlength: 5,
      },

},{timestamps: true,});

const User = mongoose.model("User" , userSchema);
export default User;