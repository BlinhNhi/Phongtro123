import db from '../models'
// Get Only User
export const getOneUserService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        });
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get One User Success' : 'Get One User Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})

export const updateUser = (payload, id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.update(payload, { where: { id } });
        resolve({
            err: response[0] > 0 ? 0 : 1,
            msg: response[0] > 0 ? 'Update User Success' : 'Update User Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})