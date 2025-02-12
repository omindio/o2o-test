import React from "react";
import { Skeleton } from "../Skeleton";

const WeatherContentSkeleton: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="text-white flex md:col-span-1">
          <Skeleton className="w-24 h-14" />
          <Skeleton className="w-24 h-14 ml-2" />
        </div>
        <div className="text-gray-400 text-sm md:col-span-1 text-right md:text-left ml-2">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5 mt-1" />
        </div>
        <div className="md:col-span-2 text-left md:text-right mt-6 md:mt-0 md:ml-auto">
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-32 h-5 mt-1" />
        </div>
      </div>

      <div className="mt-6">
        <Skeleton className="w-full h-8" />
        <div className="mt-4">
          <Skeleton className="w-full h-9" />
          <Skeleton className="w-full h-9 mt-1" />
          <Skeleton className="w-full h-9 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default WeatherContentSkeleton;
