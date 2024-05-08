'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { deletePost } from "@/data/blog";
import { useRouter } from "next/navigation";

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

export default function AuthorBlogPage({ posts }: BlogPageProps) {
    const router = useRouter();
    if (posts == null) {
        return null
    }
    const reversePosts = [...posts].reverse()

    const handleDelete = async (postId: number) => {
        await deletePost(postId);
        router.refresh()
    };


    return (
        <div className="min-h-screen p-5">
            <main>
                <section className="m-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Blog Posts</h1>
                        <Link href={"/create-post"}>
                            <Button variant="outline">Create Blog Post</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {reversePosts.length > 0 && (
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
                                    <div className="flex flex-col justify-center items-center mt-4">
                                        <div className="flex justify-center items-center">
                                            <Link href={`/edit-post/${posts[0].slug}`}>
                                                <Button variant="secondary" className="mr-2">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button variant="destructive" onClick={() => handleDelete(posts[0].id)}>
                                                Delete
                                            </Button>
                                        </div>
                                        <Link href={`/blog/${posts[0].slug}`}>
                                            <Button variant="secondary" className="mt-2">
                                                Read More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )}
                        <div className="md:w-1/3 grid grid-cols-1 gap-4">
                            {reversePosts.slice(1, 3).map((post, index) => (
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

                                    <div className="flex flex-col justify-center items-center mt-4">
                                        <div className="flex justify-center items-center">
                                            <Link href={`/edit-post/${post.slug}`}>
                                                <Button variant="secondary" className="mr-2">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button variant="destructive" onClick={() => handleDelete(post.id)}>
                                                Delete
                                            </Button>
                                        </div>
                                        <Link href={`/blog/${post.slug}`}>
                                            <Button variant="secondary" className="mt-2">
                                                Read More
                                            </Button>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {reversePosts.slice(3).map((post, index) => (
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
                                <div className="flex justify-center items-center mt-4">
                                    <Link href={`/edit-post/${post.slug}`}>
                                        <Button variant="secondary" className="mr-2">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button variant="destructive" onClick={() => handleDelete(post.id)}>
                                        Delete
                                    </Button>
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <Button variant="secondary" className="mt-2">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}