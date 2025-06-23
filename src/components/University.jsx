import React from 'react';
import { useQuery } from 'react-query';
import { getUniversityData } from '../utils/UniversityApi/UniversityApi';

const University = () => {
  const { data, isLoading, isError } = useQuery('getUniversity', getUniversityData);

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="text-center py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Universities
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading && (
          <div className="text-center text-gray-600">Loading universities...</div>
        )}
        {isError && (
          <div className="text-center text-red-500">Error loading universities</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {data?.data?.map((doc) => (
            <div
              key={doc.id}
              className="relative group mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`http://localhost:8000${doc.image}`}
                  alt={`${doc.University_name} image`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center mt-4 font-semibold text-sm sm:text-base md:text-lg text-gray-800 line-clamp-2">
                {doc.University_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default University;



