import { Skeleton } from "./ui/skeleton";

export const ProductSkeletonDestaque = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <Skeleton className="h-8 w-64 rounded-md bg-gray-200 dark:bg-gray-700" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <li
            key={index}
            className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center bg-white dark:bg-gray-900"
          >
            <div className="w-full flex justify-center rounded-lg p-4 mb-4 bg-gray-500 dark:bg-gray-800">
              <Skeleton className="w-32 h-32 rounded-md bg-gray-500 dark:bg-gray-700" />
            </div>

            <Skeleton className="h-5 w-3/4 mb-2 bg-gray-500 dark:bg-gray-700" />
            <Skeleton className="h-5 w-1/2 mb-4 bg-gray-500 dark:bg-gray-700" />

            <Skeleton className="h-6 w-24 mb-4 bg-gray-500 dark:bg-gray-700" />

            <Skeleton className="h-10 w-32 rounded-lg bg-gray-500 dark:bg-gray-700" />
          </li>
        ))}
      </ul>
    </div>
  );
};
