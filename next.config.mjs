/**
 * @type {import('next').NextConfig}
 * 
 * Next.js 配置文件，設置環境變量來配置本地和遠程 MongoDB 資料庫的 URI。
 */
const nextConfig = {
  /**
   * 環境變量設置，用於配置 MongoDB 的連接 URI。
   * 
   * @property {string} DB_LOCAL_URI - 本地 MongoDB 連接 URI，使用 127.0.0.1:27017 來避免 localhost 可能引發的問題。
   * @property {string} DB_URI - 遠程 MongoDB 連接 URI，使用 MongoDB Atlas 的集群 URI，包含身份驗證信息和參數。
   */
  env: {
    API_URL: 'http://localhost:3000',
    DB_LOCAL_URI: 'mongodb://127.0.0.1:27017/NextFullStock', // 使用127.0.0.1避免localhost的問題
    DB_URI: 'mongodb+srv://rossen:Rossen791127@cluster0.sbbdfz9.mongodb.net/NextFullStock?retryWrites=true&w=majority&appName=Cluster0'
  },
  images:{
    domains: ['res.cloudinary.com']
  }
};

export default nextConfig;