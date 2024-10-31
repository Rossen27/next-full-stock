'use client'

import  RoomItem  from './room/RoomItem';
import { MdOutlineArrowBack } from 'react-icons/md';

export default function HomePage() {
  
  return (
    <div className='min-h-screen px-24 py-6'>
      <header className='flex flex-col '>
        <h1 className='text-5xl'>搜尋結果</h1>
        <div className='flex items-center mt-2 hover:text-blue-500'>
          <MdOutlineArrowBack />
          <span>回到上一頁</span>
        </div>
      </header>
      <main className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {[...Array(16)].map((_, index) => (
          <RoomItem key={index}  id={`room-${index}`} />
        ))}
      </main>
    </div>
  );
}
