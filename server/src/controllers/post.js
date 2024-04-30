import * as postService from '../services/post';

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller" + error
        });
    }
}

export const getPostsLimit = async (req, res) => {
    //query tượn trưng cho {"priceCode":"UNTF" , categories , area}
    const { page, priceNumber, areaNumber, ...query } = req.query
    // console.log(query);
    try {
        const response = await postService.getPostLimitService(page, query, { priceNumber, areaNumber });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller" + error
        });
    }
}

export const getNewPost = async (req, res) => {
    try {
        const response = await postService.getNewPostService()
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller" + error
        });
    }
}

export const createNewPost = async (req, res) => {
    try {
        const { categoryCode, title, priceNumber, areaNumber, label } = req.body;
        const { id } = req.user
        if (!categoryCode || !id || !title || !priceNumber || !areaNumber || !label) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing Input'
            })
        }
        const response = await postService.createNewPostService(req.body, id)
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at Post Controller " + error
        });
    }
}

// route-> controller -> service
export const getPostsLimitAdmin = async (req, res) => {
    //query tượn trưng cho {"priceCode":"UNTF" , categories , area}
    const { page, ...query } = req.query
    const { id } = req.user
    // console.log(query);
    try {
        if (!id) return res.status(400).json({
            err: 1,
            msg: "Missing Input"
        })
        const response = await postService.getPostLimitAdminsService(page, query, id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller" + error
        });
    }
}

export const updatePost = async (req, res) => {
    const { postId, overviewId, imagesId, attributesId, ...payload } = req.body
    const { id } = req.user
    try {
        if (!postId || !id || !overviewId || !imagesId || !attributesId) return res.status(400).json({
            err: 1,
            msg: "Missing Post ID or User ID"
        })
        const response = await postService.updatePost(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller " + error
        });
    }
}

// body : từ body gửi lên server
// query : từ params gửi lên server
export const deletePost = async (req, res) => {
    const { postId } = req.query
    const { id } = req.user
    try {
        if (!postId || !id) return res.status(400).json({
            err: 1,
            msg: "Missing Post ID or User ID"
        })
        const response = await postService.deletePost(postId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post Controller " + error
        });
    }
}