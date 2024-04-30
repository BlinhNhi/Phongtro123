import db from '../models'
// Get All
export const getAllAreasService = ()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Area.findAll({
            raw : true,
            attributes : ['code','value','order']
        });
        resolve({
            err : response ? 0 : 1,
            msg : response ? 'Get Area Success' : 'Get Area Fail ',
            response
        });
    } catch (error) {
        reject(error)
    }
})