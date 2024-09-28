import { NextRequest, NextResponse } from 'next/server';
import Room from '../models/room'; // 引入 Room model

export const allRooms = async (req: NextRequest) => {
  const resPerPage = 9; // 每頁顯示的房間數
  const rooms = await Room.find();
  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
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