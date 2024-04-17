'use client'
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

interface BlogPageProps {
    posts: {
        id: number;
        title: string;
        img: string;
        category: string;
        content: string;
        published: boolean;
        slug: string;
        date: Date;
        userId: string | null;
        }[] | null,
    }

export default function BlogPage({posts}: BlogPageProps) {
    if (posts == null)  {
        return null
    }
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="p-5"
            >
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="m-4"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        {posts.length > 0 && (
                            <article
                                className="bg-card border rounded-lg  md:w-2/3 flex  items-center justify-center">
                                <div className="p-4">
                                    <div className="w-full h-full flex">
                                        <div>
                                            <Link href={`/blog/${posts[0].slug}`}>
                                                <Image
                                                    src="/planner.png"
                                                    alt="Most Recent Blog Post"
                                                    width={1280}
                                                    height={800}
                                                    className="rounded-md border "
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={`/blog/${posts[0].slug}`}>
                                            <h2 className="text-2xl text-center pt-4 font-semibold">{posts[0].title}</h2>
                                        </Link>
                                        <Link href={`/blog/${posts[0].slug}`}>
                                            <p className="text-gray-600 text-center font-semibold">
                                                {new Date(posts[0].date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-center font-semibold">
                                            {posts[0].content.split('\n')[2]}
                                        </p>
                                    </div>
                                    <div className="w-full flex justify-center items-center">
                                        <Link href={`/blog/${posts[0].slug}`}>
                                            <Button variant="secondary" className="mt-4">
                                                Read More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )}
                        <div className="md:w-1/3 grid grid-cols-1 gap-4">
                            {posts.slice(1, 3).map((post, index) => (
                                <article key={index} className="bg-card border text-center rounded-lg p-4">
                                    <div className={'w-full flex  items-center justify-center'}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                        >
                                            <Image
                                                src="/comp.png"
                                                alt="Runner Up Blog Post"
                                                width={850}
                                                height={550}
                                                className="rounded-md border"
                                            />
                                        </Link>
                                    </div>
                                    <div className={'pb-2'}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                        >
                                            <h2 className="text-xl font-semibold pt-2">{post.title}</h2>
                                        </Link>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                        >
                                            <p className="text-gray-600 text-center font-semibold">

                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        </Link>
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                    >
                                        <Button variant={'secondary'} className={'p-4'}>
                                            Read More
                                        </Button>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="grid m-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {posts.slice(3).map((post, index) => (
                        <article key={index}
                                 className="bg-card border text-center rounded-lg p-6 flex flex-col justify-between h-full">
                            <Image
                                src="/comp.png"
                                alt="Blog Post"
                                width={700}
                                height={400}
                                className="rounded-md border"
                            />
                            <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
                            <p className="text-gray-600 text-center font-semibold">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <div>
                                <Link href={`/blog/${post.slug}`}>
                                    <Button variant="secondary" className="mt-2">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    ))}
                </motion.section>
            </motion.div>

        </>
    );
}