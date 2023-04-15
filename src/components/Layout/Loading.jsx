import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-yellow-600 text-4xl font-bold animate-pulse">Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
