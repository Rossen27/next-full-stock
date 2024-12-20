import dbConnect from '@/backend/config/dbControllers';
import { allRooms } from '@/backend/controllers/roomControllers';  // 引入 newRoom 方法
import { createEdgeRouter } from 'next-connect';
import { NextRequest } from 'next/server';

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

// 將 GET 方法加入 router 中，用於處理房間詳細資訊
export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
