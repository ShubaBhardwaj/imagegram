import User from "../schema/user.js";

export const createUser = async (userObject) => {
    try{
        const user = await User.create(userObject);
        return user;
    }catch(error){
        console.log(error);
    }
}

export const findUserByEmail = async (email) => {
    try{
        const user = await User.findone({email});
        return user;
    }catch(error){
        console.log(error);
    }
}

export const findAllUsersByEmail = async (email) => {
    try{
        const users = await User.fing({email});
        return users;
    }catch(error){
        console.log(error);
    }
}