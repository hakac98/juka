import mongoose from "mongoose";
import conn from "../config/DB.js";

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    username: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
    },
  },
  { collection: "users" }
);

const User = conn.main.model("User", userSchema);

export default User;
