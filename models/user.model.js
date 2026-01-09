import { Schema,model } from "mongoose";


export const userSchema = new Schema({
    name: { type: String, required: [true,"Name is required"],minLength : 2, maxLength: 100 },
    email: { type: String, required: [true,"Email is required"], unique: true, minLength: 5, maxLength: 100 , match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    password: { type: String, required: [true,"Password is required"], minLength: 7,select : false },
    city: { type: String, required: [true,"City is required"], minLength: 2, maxLength: 100 },
    state: { type: String, minLength: 2, maxLength: 100 },
    country: { type: String, required: [true,"Country is required"], minLength: 2, maxLength: 100 },
}, { timestamps: true ,strict: true});

export const User = model('User', userSchema);

