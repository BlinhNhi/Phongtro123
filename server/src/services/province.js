import db from '../models'
// Get All
export const getAllProvincesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Province.findAll({
            raw: true,
            attributes: ['code', 'value']
        });
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get Province Success' : 'Get Province Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})