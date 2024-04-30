import * as insertService from '../services/insert';

export const insert = async (req, res) => {
    try {
        // insertService : create data all 
        const reponse = await insertService.insertService();
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at insert.js (Controller)" + error
        });
    }
};