import User from '../model/user.js';
import Token from '../model/token.js';


import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

export const signupUser = async(request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 9)
        const user = {
            name: request.body.name,
            mobile: request.body.mobile,
            password: hashedPassword,
            email: request.body.email
        }

        const newUser = new User(user);                                     
        await newUser.save();

        return response.status(200).json({msg: 'Signup Successfull!'});
    } catch (error) {
        return response.status(500).json({msg: 'Error while signing up the user'});
    }
}


export const loginUser = async (request, response) => {
  let user = await User.findOne({ email: request.body.email });

  if (!user) {
    return response.status(400).json({ msg: 'Incorrect Email!' });
  }

  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {
        expiresIn: '15m',
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response
        .status(200)
        .json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          name: user.name,
          email: user.email,
        });
    } else {
      return response.status(400).json({ msg: 'Incorrect Password!' });
    }
  } catch (error) {
    return response.status(500).json({ msg: 'Error while logging the user!' });
  }
};
