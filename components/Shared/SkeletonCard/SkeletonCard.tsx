import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard(props: { count: number }) {
  const { count } = props;

  return (
    <div className="flex flex-col my-4 mx-6 border rounded-md p-4 gap-10">
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <Skeleton className="h-[100px] w-[100px] rounded-md m-auto" />
              <div>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col gap-1 items-start">
                    <div className="flex gap-1 items-center text-sm mt-2">
                      <Skeleton className="h-[20px] w-[200px] rounded-md" />
                    </div>

                    <div className="flex gap-1 items-center text-sm mt-2">
                      <Skeleton className="h-[20px] w-[200px] rounded-md" />
                    </div>

                    <div className="flex gap-1 items-center text-sm mt-2">
                      <Skeleton className="h-[20px] w-[200px] rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-1 items-center text-sm mt-2">
                  <Skeleton className="h-[30px] w-[200px] rounded-md" />
                </div>

                <div className="flex gap-1 items-center text-sm mt-2">
                  <Skeleton className="h-[30px] w-[200px] rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 w-full mt-3" />
        </div>
      ))}
    </div>
  );
}
