import React from 'react';

export default function AppLogo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold shadow-lg shadow-blue-500/20">
        🚀
      </div>
      <span className="text-xl font-extrabold tracking-tight text-white">
        Tech<span className="text-blue-500">ResourceHub</span>
      </span>
    </div>
  );
}