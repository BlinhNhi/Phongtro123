// ?
import express from 'express';
// lấy file từ .env
require('dotenv').config();
import cors from 'cors';
import initRoutes from "./src/routes"
import connectDatabase from './src/config/conenctDatabase';
import generateCode from './src/ultis/generateCode';
import generateDate from './src/ultis/generateDate';
import { getNumberFromString } from './src/ultis/common';

console.log(getNumberFromString('100.000 đồng/tháng'));

// console.log(dataPrices);
// console.log(dataArea);
// console.log(getNumberFromString('3 adasdas 6 addasd 7'));
// console.log(generateDate());

// console.log(generateCode(4));
console.log(generateCode(" Thành Phố Hà Nội"));

const app = express()
app.use(cors({
    // truyền url từ client đc phép truy cập vào data
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "DELETE", "GET"]
}));
// đọc data từ client gửi lên (từ josn)
app.use(express.json({ limit: '10mb' }));
// đọc data từ client gửi lên (từ body)
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

initRoutes(app);
connectDatabase();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
    console.log(`Sever is running on PORT ${listener.address().port}`)
})

