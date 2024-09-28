import Room from "../backend/models/room"; // 引入Room模型
import mongoose from "mongoose";
import { rooms } from "./data"; // 引入資料
require('dotenv').config(); 

const seederRooms = async () => {
  try {
    // 根據環境變數來選擇連接的 MongoDB URI
    const mongoUri =
      process.env.NODE_ENV === 'production'
        ? process.env.DB_URI 
        : process.env.DB_LOCAL_URI ;

    if (!mongoUri) {
      throw new Error("MongoDB URI 未設定。請確認 .env 內的環境變量。");
    }

    // 連接 MongoDB
    await mongoose.connect(mongoUri);
    
    await Room.deleteMany(); // 刪除所有資料
    console.log("資料已刪除");
    
    await Room.insertMany(rooms); // 新增資料
    console.log("資料已新增");
    
    process.exit(); // 結束程式
  } catch (error) {
    console.log(error);
    process.exit(1); // 結束程式，帶有錯誤狀態
  }
};

seederRooms(); // 執行Seeder