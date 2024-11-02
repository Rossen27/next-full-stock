'use client';

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
    <div className='flex justify-center items-center min-h-screen'>
      <div className='text-center'>
        <div className='grid h-screen place-content-center bg-white px-4'>
          <h1 className='uppercase tracking-widest text-gray-500'>
            {statusCode} | {error.message}
          </h1>
          <p className='text-md mt-2 text-gray-500'>抱歉造成您的不便。</p>
          <button
            className='mt-4 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600'
            onClick={() => reset?.()}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
