'use client';

import { Button } from '@nextui-org/react';

interface ErrorWithStatusCode {
  statusCode?: number;
  message: string;
}

export default function Error({
  error,
  reset,
}: {
  error: ErrorWithStatusCode;
  reset?: () => void;
}) {
  const statusCode = error?.statusCode ?? 'Error';

  return (
    <div className='flex justify-center items-center'>
      <div className='text-center'>
        <div className='grid h-screen place-content-center px-4'>
          <h1 className='uppercase tracking-widest text-gray-500'>
            {statusCode} | {error.message}
          </h1>
          <p className='text-md mt-2 text-gray-500'>抱歉造成您的不便。</p>
          <Button
            radius='full'
            variant='flat'
            className='mt-4'
            onClick={() => {
              reset?.();
            }}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
