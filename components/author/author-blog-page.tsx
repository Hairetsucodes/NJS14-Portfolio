'use client'
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {deletePost, getPosts} from "@/data/blog";

export default function AuthorBlogPage() {
    type posts = {
        id: number;
        title: string;
        description: string;
        author: string;
        slug: string;
        date: string;
        tags: string;
    };

    const [posts, setPosts] = useState<posts[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await getPosts();
            if (data) {
                setPosts(data);
            }
        };
        fetchData().then(() => {
        });
    }, []);



    const handleDelete = async (postId: number) => {
        await deletePost(postId);
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div className="min-h-screen p-5">
            <main>
                <section className="mb-10">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Blog Posts</h1>
                        <Link href={"/create-post"}>
                            <Button variant="outline">Create Blog Post</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {posts.length > 0 && (
                            <article className="bg-card border rounded-lg p-6 md:w-2/3">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src="/planner.png"
                                        alt="Most Recent Blog Post"
                                        width={700}
                                        height={400}
                                        className="rounded-md border mt-8"
                                    />
                                </div>
                                <h2 className="text-2xl text-center font-semibold mt-4">{posts[0].title}</h2>
                                <p className="text-gray-600 text-center font-semibold">
                                    {new Date(posts[0].date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>

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
                            </article>
                        )}
                        <div className="md:w-1/3 grid grid-cols-1 gap-4">
                            {posts.slice(1, 3).map((post, index) => (
                                <article key={index} className="bg-card border text-center rounded-lg p-4">
                                    <div className="w-full flex justify-center">
                                        <Image
                                            src="/comp.png"
                                            alt="Runner Up Blog Post"
                                            width={300}
                                            height={200}
                                            className="rounded-md border"
                                        />
                                    </div>
                                    <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                                    <p className="text-gray-600 text-center font-semibold">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </p>
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