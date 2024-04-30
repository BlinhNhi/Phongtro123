import db from '../models'
// Get All
export const getAllCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            // attributes : ['code','value','path']
        });
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get Category Success' : 'Get Category Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})