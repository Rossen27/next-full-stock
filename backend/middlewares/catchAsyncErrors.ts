import { NextRequest, NextResponse } from 'next/server';

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

interface IValidationError {
  message: string;
}

/**
 * 捕捉並處理異步錯誤的高階函數。
 * 
 * @function catchAsyncErrors
 * @param {HandlerFunction} handler - 傳入一個處理請求的異步函數（例如：API 路由處理函數）。
 * @returns {(req: NextRequest, params: any) => Promise<NextResponse>} 
 *  回傳一個新的異步函數，該函數會自動捕捉執行中的錯誤並處理它們。
 * 
 * @example
 * const getUser = catchAsyncErrors(async (req, params) => {
 *   const user = await User.findById(params.id);
 *   return NextResponse.json(user);
 * });
 */
export const catchAsyncErrors =
  (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
    try {
      // 嘗試執行傳入的處理函數
      return await handler(req, params);
    } catch (error: any) {
      // 處理 CastError 錯誤，通常表示請求的資料格式無效
      if (error?.name === 'CastError') {
        error.statusCode = 400; // 設置狀態碼為 400 表示請求錯誤
        error.message = `無效的 ${error.path}`; // 設置錯誤訊息
      }

      // 處理資料驗證錯誤 ValidationError，通常發生在資料格式不符合預期時
      if (error?.name === 'ValidationError') {
        error.statusCode = 400; // 設置狀態碼為 400 表示請求錯誤
        error.message = Object.values<IValidationError>(error.errors).map(
          (value: any) => value.message
        ); // 透過驗證錯誤的 message 屬性，生成錯誤訊息陣列
      }

      // 捕捉到錯誤時返回錯誤訊息
      return NextResponse.json(
        {
          message: error.message, // 傳送錯誤訊息
        },
        { status: error.statusCode || 500 } // 如果沒有狀態碼，預設為 500 伺服器錯誤
      );
    }
  };