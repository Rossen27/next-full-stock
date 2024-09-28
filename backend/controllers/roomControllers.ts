import { NextRequest, NextResponse } from 'next/server';
import Room from '../models/room'; // 引入 Room model

// 取得所有房間
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
};


// 取得單一房間資訊
export const getRoomDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Room.findById(params.id); // 取得單一房間ID
  if (!room) {
    return NextResponse.json(
      {
        success: false,
        message: '查無此房間',
      },
      { status: 404 }
    );
  }
  return NextResponse.json({
    success: true,
    room,
  });
};