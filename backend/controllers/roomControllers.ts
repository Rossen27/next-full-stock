import { NextRequest, NextResponse } from 'next/server';
import Room, { IRoom } from '../models/room'; // 引入 Room model
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors';
import ErrorHandler from '../utils/errorHandler';
import APIFilters from '../utils/apiFilters';

// 取得所有房間 GET => /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage = 12; // 每頁顯示的房間數
  // const rooms = await Room.find();

  const { searchParams } = new URL(req.url);
  const queryStr: any = {};
  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  // const roomsCount: number = await Room.countDocuments();
  const apiFilters = new APIFilters(Room, queryStr).search().filter();
  let rooms: IRoom[] = await apiFilters.query;
  const filteredRoomsCount: number = rooms.length;

  apiFilters.pagination(resPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    // roomsCount,
    filteredRoomsCount,
    resPerPage,
    rooms,
  });
});

// 新增房間 POST => /api/admin/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({
    success: true,
    room,
  });
});

// 取得單一房間資訊 GET => /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id); // 取得單一房間ID
    if (!room) {
      throw new ErrorHandler(404, '查無此房間');
    }
    return NextResponse.json({
      success: true,
      room,
    });
  }
);

// 更新房間資訊 PUT => /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body = await req.json();

    if (!room) {
      throw new ErrorHandler(404, '查無此房間');
    }

    room = await Room.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      room,
    });
  }
);

// 刪除房間 DELETE => /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler(404, '查無此房間');
    }

    // TODO - 之後要加入刪除房間的相片功能

    await room.deleteOne();

    return NextResponse.json({
      success: true,
    });
  }
);
