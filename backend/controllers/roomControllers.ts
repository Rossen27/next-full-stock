import { NextRequest, NextResponse } from 'next/server';
import Room from '../models/room'; // 引入 Room model

export const allRooms = async (req: NextRequest) => {
  return NextResponse.json({
    data: 'Hello, World!',
  });
};

// 新增房間
export const newRoom = async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({
    success: true,
    room,
  });
}