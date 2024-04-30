import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));
// nhận từ body {phone , password , name} : dùng destructuring để rải ra
export const registerService = ({ phone, password, name }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { phone },
            defaults: {
                phone,
                name,
                password: hashPassword(password),
                id: v4()
            }
        });
        // response[1]  : true tạo mới chưa có sẽ tạo ra tài khoản token 
        // response[0]  : false có tài khoản sẽ đc gán token = null
        const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
        // console.log(token);
        resolve({
            err: token ? 0 : 2,
            msg: token ? "Register is succesfully !" : "Phone number has been already used !",
            // nếu có token trả về token
            token: token || null
        })
    } catch (error) {
        reject(error);
    }
});

// Login
export const loginService = ({ phone, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { phone },
            raw: true
        });
        const isConnectPassword = response && bcrypt.compareSync(password, response.password)
        const token = isConnectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
        resolve({
            err: token ? 0 : 2,
            msg: token ? "Login is succesfully !" : response ? "Password is'nt correct !" : "Phone number not found!",
            // nếu có token trả về token
            token: token || null
        })
    } catch (error) {
        reject(error);
    }
});