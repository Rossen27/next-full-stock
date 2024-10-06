/**
 * 自定義錯誤處理類別，繼承 JavaScript 的內建 Error 類別
 * @class
 */
class ErrorHandler extends Error {
  /**
   * HTTP 狀態碼，例如：404, 500
   * @type {number}
   */
  statusCode: number;

  /**
   * 創建一個 ErrorHandler 的實例，用來處理應用程式中的錯誤
   * @constructor
   * @param {number} statusCode - HTTP 狀態碼，表示錯誤的類型（例如：404、500）
   * @param {string} errMessage - 錯誤訊息，用來描述發生的問題
   */
  constructor(statusCode: number, errMessage: string) {
    super(errMessage); // 呼叫父類別（Error）的建構函式，設置錯誤訊息
    this.statusCode = statusCode; // 設置 HTTP 狀態碼
  }
}

export default ErrorHandler;