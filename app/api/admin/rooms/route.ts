import dbConnect from '@/backend/config/dbControllers';
import { newRoom } from '@/backend/controllers/roomControllers';  // 引入 newRoom 方法
import { createEdgeRouter } from 'next-connect';
import { NextRequest } from 'next/server';

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(newRoom); // 新增 POST 方法，用於處理房間新增

// 新增 POST 方法，用於處理房間新增
export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
