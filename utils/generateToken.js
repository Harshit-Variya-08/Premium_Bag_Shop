import jwt from 'jsonwebtoken';


let token = (user) =>
    {
        return  jwt.sign({ email:user.email, id: user._id },process.env.JWT_KEY);
    }

export default token;