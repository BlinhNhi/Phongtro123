import * as authService from '../services/auth';
// nhận data từ auth/routes
// Register
export const register = async(req,res) => {
    const {name , phone , password} = req.body;
    try {
        if(!name || !phone || !password){
            return res.status(400).json({
                err : 1,
                msg: "Missing inputs !"
            });
        }
        // nhận data từ body chuyển qua servives
        const reponse = await authService.registerService(req.body);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err : -1 ,
            msg : "Fail at auth.js (Controller)" + error
        });
    }
};
// Login
export const login = async(req,res) => {
    const { phone , password} = req.body;
    try {
        if(!phone || !password){
            return res.status(400).json({
                err : 1,
                msg: "Missing inputs !"
            });
        }
        // nhận data từ body chuyển qua servives
        const reponse = await authService.loginService(req.body);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err : -1 ,
            msg : "Fail at auth.js (Controller)" + error
        });
    }
};