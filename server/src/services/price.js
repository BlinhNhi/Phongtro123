import db from '../models'
// Get All
export const getAllPricesService = ()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Price.findAll({
            raw : true,
            attributes : ['code','value','order']
        });
        resolve({
            err : response ? 0 : 1,
            msg : response ? 'Get Price Success' : 'Get Price Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})