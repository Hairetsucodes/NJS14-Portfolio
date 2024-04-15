'use client'

export default function BlogPostSkeleton(): JSX.Element {
    return (
        <div className="min-w-[800px] p-8 bg-card rounded-lg border">
            {/* Title Div */}
            <div className="m-4 p-2 border-b">
                <div className="h-8 bg-gray-700 rounded w-1/2 animate-pulse"></div>
            </div>

            {/* Image Div */}
            <div className="mb-8 flex justify-center items-center">
                <div className="h-64 w-full bg-gray-700 rounded-lg animate-pulse"></div>
            </div>

            {/* Main Content Div */}
            <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
            </div>
        </div>
    );
}