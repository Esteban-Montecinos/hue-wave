import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="grid w-full max-w-screen-xl grid-cols-3 gap-4 px-4 mx-auto mt-4 md:mt-8 md:gap-8">
      <div className="grid w-full grid-cols-1 col-span-3 gap-4 lg:grid-cols-2 md:gap-8">
      <Skeleton className="h-[150px] sm:h-[300px] rounded md:rounded-xl lg:h-full  bg-neutral-600 lg:min-h-[400px]"></Skeleton>
      <Skeleton className="rounded md:rounded-xl bg-neutral-600 min-h-20"></Skeleton>
      </div>
      <div className="grid grid-cols-1 col-span-3 gap-2 md:gap-4 sm:grid-cols-3">
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-4 lg:grid-cols-2">
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
      </div>
      <div className="grid grid-cols-1 col-span-2 gap-4 lg:grid-cols-2">
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
      </div>
    </main>
  )
}
