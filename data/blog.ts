'use server'
import {db} from "@/lib/db";


export const deletePost = async (id: number) => {
    try {
        return await db.blogPost.delete(
            {
                where: {
                    id
                }
            }
        )
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const editPost = async (id: number, title: string, content: string, category: string, img: string) => {
    try {
        return await db.blogPost.update(
            {
                where: {
                    id
                },
                data: {
                    title: title,
                    content: content,
                    category: category,
                    img: img,
                    date: new Date(),
                }
            }
        )
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const getPosts = async () => {
    try {
        return await db.blogPost.findMany()
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const getPost = async (slug: string) => {
    try {
        return await db.blogPost.findUnique(
            {
                where: {slug: slug}
            }
        )
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const createPost = async (title: string, content: string, category: string, img: string) => {
    try {
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        await db.blogPost.create(
            {
                data: {
                    title: title,
                    img: img,
                    category: category,
                    content: content,
                    published: true,
                    // @ts-ignore
                    date: new Date(),
                    slug: slug
                }
            })
    } catch (e) {
        console.error(e);
        throw e;
    }
}
