'use client';

import { IRoom } from '@/backend/models/room';
import RoomItem from './room/RoomItem';
import { MdOutlineArrowBack } from 'react-icons/md';

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

export default function HomePage({ data }: Props) {
  const { rooms, resPerPage, filteredRoomsCount } = data;

  return (
    <div className='min-h-screen px-24 py-6'>
      <header className='flex flex-col '>
        <h1 className='text-5xl'>搜尋結果</h1>
        <div className='flex items-center mt-2 hover:text-blue-500'>
          <MdOutlineArrowBack />
          <span>回到上一頁</span>
        </div>
      </header>
      <main className='mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {rooms?.length === 0 ? (
          <div className='mt-5 w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
            <strong className='font-bold'>No Rooms.</strong>
          </div>
        ) : (
          rooms?.map((room) => <RoomItem key={room._id as number} room={room} />)
        )}
      </main>
    </div>
  );
}
