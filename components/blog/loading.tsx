export default function BlogSkeleton() {
    function LoadingSkeleton() {
        return (
            <div className="p-5">
                <section className="m-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <article className="bg-card border rounded-lg p-6 md:w-2/3 px-20">
                            {/* Skeleton for the main image */}
                            <div className="w-full flex justify-center items-center">
                                <div className="rounded-md border mt-8 w-full h-64 bg-gray-700 animate-pulse"></div>
                            </div>
                            {/* Skeleton for the main title */}
                            <div
                                className="text-2xl text-center font-semibold mt-4 w-full h-8 bg-gray-700 animate-pulse"></div>
                            {/* Skeleton for the main date */}
                            <div
                                className="text-gray-600 text-center font-semibold w-1/2 mx-auto h-4 bg-gray-700 animate-pulse mt-2"></div>
                            {/* Skeleton for the main button */}
                            <div className="w-full flex justify-center items-center">
                                <div className="mt-4 px-6 py-2 rounded-md bg-gray-700 animate-pulse w-32"></div>
                            </div>
                        </article>
                        <div className="md:w-1/3 grid grid-cols-1 gap-4">
                            {[...Array(2)].map((_, index) => (
                                <article key={index} className="bg-card border text-center rounded-lg p-4 px-20">
                                    {/* Skeleton for the runner-up images */}
                                    <div className="w-full flex justify-center">
                                        <div className="rounded-md border w-full h-40 bg-gray-700 animate-pulse"></div>
                                    </div>
                                    {/* Skeleton for the runner-up titles */}
                                    <div
                                        className="text-xl font-semibold mt-2 w-full h-6 bg-gray-700 animate-pulse"></div>
                                    {/* Skeleton for the runner-up dates */}
                                    <div
                                        className="text-gray-600 text-center font-semibold w-1/2 mx-auto h-4 bg-gray-700 animate-pulse mt-2"></div>
                                    {/* Skeleton for the runner-up buttons */}
                                    <div
                                        className="mt-4 px-6 py-2 rounded-md bg-gray-700 animate-pulse w-32 mx-auto"></div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="grid m-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(5)].map((_, index) => (
                        <article key={index} className="bg-card border text-center rounded-lg p-6">
                            {/* Skeleton for the remaining blog post images */}
                            <div className="w-full flex justify-center items-center">
                                <div className="rounded-md border w-full h-40 bg-gray-700 animate-pulse"></div>
                            </div>
                            {/* Skeleton for the remaining blog post titles */}
                            <div className="text-2xl font-semibold mt-4 w-full h-8 bg-gray-700 animate-pulse"></div>
                            {/* Skeleton for the remaining blog post dates */}
                            <div className="mt-2 text-gray-600 w-1/2 mx-auto h-4 bg-gray-700 animate-pulse"></div>
                            {/* Skeleton for the remaining blog post buttons */}
                            <div className="mt-4 px-6 py-2 rounded-md bg-gray-700 animate-pulse w-32 mx-auto"></div>
                        </article>
                    ))}
                </section>
            </div>
        )
    }

    return <LoadingSkeleton/>
}