import React from "react";

import { useWeather } from "../hooks/useWeather";
import WeatherSearch from "../components/ui/WeatherSearch";
import WeatherContent from "../components/ui/WeatherContent";
import WeatherContentSkeleton from "../components/ui/WeatherContentSkeleton";

const HomePage: React.FC = () => {
  const { data, isLoading } = useWeather();

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-4 py-10 lg:px-6">
      <div className="sm:mx-auto sm:w-full md:max-w-xl">
        <h1 className="scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
          El tiempo
        </h1>
        <div className="mt-4">
          <WeatherSearch />
          {isLoading ? (
            <WeatherContentSkeleton />
          ) : (
            data && <WeatherContent data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
