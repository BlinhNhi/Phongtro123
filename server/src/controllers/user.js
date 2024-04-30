import * as services from '../services/user'

// 15:31 53
export const getCurrentUser = async (req, res) => {
    const { id } = req.user
    try {
        const response = await services.getOneUserService(id);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at User Controller ' + error
        })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.user
    const payload = req.body
    // console.log(payload);
    try {
        if (!payload) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing Payload'
            })
        }
        const response = await services.updateUser(payload, id);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at User Controller ' + error
        })
    }
}