import mongoose from 'mongoose';

/**
 * 建立與 MongoDB 的連接。如果已有有效的連接，則不會重新連接。
 * 根據當前環境變量，選擇使用本地或生產環境的資料庫 URI 進行連接。
 * 
 * @async
 * @function dbConnect
 * @returns {Promise<void>} 無返回值，負責進行 MongoDB 連接。
 * 
 * @description
 * - 在開發環境下，使用 `process.env.DB_LOCAL_URI` 進行本地資料庫連接。
 * - 在生產環境下，使用 `process.env.DB_URI` 進行遠程資料庫連接。
 * - 如果 mongoose 的 `connection.readyState` 大於等於 1，表示已經有連接，則直接返回。
 */
const dbConnect = async (): Promise<void> => {
  // 如果 mongoose 已經有連接，則返回
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  let DB_URI: string = '';

  // 根據環境設置不同的資料庫 URL
  if (process.env.NODE_ENV === 'development') {
    DB_URI = process.env.DB_LOCAL_URI!;
  }

  if (process.env.NODE_ENV === 'production') {
    DB_URI = process.env.DB_URI!;
  }

  // 連接到 MongoDB
  await mongoose
    .connect(DB_URI)
    .then((con) => console.log('MongoDB 已經連線連線環境為：' + con.connection.host));
};

export default dbConnect;

/**
 * Connection.readyState 是 Mongoose 的連接狀態屬性，表示與 MongoDB 數據庫的連接當前處於的狀態。
 * Mongoose 是一個常用的 Node.js ODM（對象數據模型），用來與 MongoDB 進行交互。
 * readyState 屬性反映了 Mongoose 與 MongoDB 連接的當前狀態，以數字表示不同的連接狀態。
 *
 * 連接狀態的含義：
 *
 * @typedef {Object} ConnectionStates
 * @property {number} 0 - disconnected：當前與 MongoDB 斷開連接。這表示 Mongoose 尚未嘗試連接，或連接已經斷開。
 * @property {number} 1 - connected：已成功連接到 MongoDB。應用程序可以與數據庫交互並執行 CRUD 操作。
 * @property {number} 2 - connecting：正在連接到 MongoDB。連接正在建立過程中，但還未完全建立。
 * @property {number} 3 - disconnecting：正在從 MongoDB 斷開連接。正在進行斷開的過程中。
 * @property {number} 99 - uninitialized：連接尚未初始化。這種狀態通常出現在 Mongoose 尚未嘗試連接數據庫的情況下。
 */