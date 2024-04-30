// dùng để lấy giá trị số của diện tích , giá từ chuỗi string
// export const getNumberFromString = (string) => {
//     let priceAndArea = 0;
//     if (string?.search('đồng/tháng') !== -1) {
//         priceAndArea = +string.match(/\d+/)[0] / Math.pow(10, 3)
//     } else if (string.search('triệu/tháng') !== -1) {
//         priceAndArea = +string.match(/\d+/)[0]
//     }
//     else if (string.search('m') !== -1) {
//         priceAndArea = +string.match(/\d+/)[0]
//     }
//     return priceAndArea
// };

export const getNumberFromString = (string) => {
    let priceAndArea = 0
    if (string.search('đồng/tháng') !== -1) {
        priceAndArea = +string.match(/\d+/)[0] / Math.pow(10, 3)
    } else if (string.search('triệu/tháng') !== -1) {
        priceAndArea = +string.match(/\d+/)[0]
    } else if (string.search('m')) {
        priceAndArea = +string.match(/\d+/)[0]
    }
    return priceAndArea
}


export const getNumberFromStringV2 = (string) => {
    let priceAndArea = 0
    if (string.search('đồng/tháng') !== -1) {
        priceAndArea = +string.match(/\d+/)[0] / Math.pow(10, 3)
    } else if (string.search('triệu/tháng') !== -1) {
        priceAndArea = +string.split(' ')[0]
    } else if (string.search('m')) {
        priceAndArea = +string.match(/\d+/)[0]
    }
    return +priceAndArea
}