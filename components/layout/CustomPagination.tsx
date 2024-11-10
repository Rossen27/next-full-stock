"use client";

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Pagination, PaginationItemType } from '@nextui-org/react';
import {
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import cn from 'classnames';

interface Props {
  resPerPage: number;
  filteredRoomsCount: number;
}

const CustomPagination = ({ resPerPage, filteredRoomsCount }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(filteredRoomsCount / resPerPage);

  const handlePageChange = (page: number) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('page', page.toString());
    router.push(`${window.location.pathname}?${queryParams.toString()}`);
  };

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: any) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <>
          {/* 下一頁按鈕 */}
          <button
            key={key}
            className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
            onClick={() => {
              onNext();
              setPage(currentPage + 1);
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
          >
            <MdOutlineNavigateNext className='text-xl' />
          </button>

          {/* 快速跳轉到最後一頁 */}
          <button
            key='last'
            className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
            onClick={() => {
              setPage(totalPages);
              handlePageChange(totalPages);
            }}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardDoubleArrowRight className='text-xl' />
          </button>
        </>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <>
          {/* 快速跳轉到第一頁 */}
          <button
            key='first'
            className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
            onClick={() => {
              setPage(1);
              handlePageChange(1);
            }}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardDoubleArrowLeft className='text-xl' />
          </button>

          {/* 上一頁按鈕 */}
          <button
            key={key}
            className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
            onClick={() => {
              onPrevious();
              setPage(currentPage - 1);
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            <MdOutlineNavigateBefore className='text-xl' />
          </button>
        </>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // 頁碼按鈕
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive &&
            'text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold'
        )}
        onClick={() => {
          setPage(value);
          handlePageChange(value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <div className='flex justify-center mt-5 gap-2'>
      {resPerPage < filteredRoomsCount && (
        <Pagination
          disableCursorAnimation
          showControls
          total={totalPages}
          initialPage={currentPage}
          className='gap-2'
          radius='full'
          renderItem={renderItem}
          variant='light'
        />
      )}
    </div>
  );
};

export default CustomPagination;