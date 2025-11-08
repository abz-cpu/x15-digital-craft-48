import { Skeleton } from "@/components/ui/skeleton";

export const LoadingFallback = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="h-16 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
