'use client'
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {NavMenu} from "@/components/navigation/nav-menu";
import {Footer} from "@/components/about-page/Footer";
import {cn} from "@/lib/utils";
import BlogPost from '@/components/blog/blog-post'
import {getPost} from "@/data/blog";

export default function Page() {
    const [postData, setPostData] = useState<any>([]);
    const params = useParams();
    const postSlug = params.postSlug as string;
    const [isLoading, setIsLoading] = useState(true);

    async function fetchPostData() {
        const data = await getPost(postSlug);
        setPostData(data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPostData().then();
        // eslint-disable-next-line
    }, []);

    return (
        <main className="min-h-screen h-full w-full bg-black dark:bg-grid-small-blue-500 bg-grid-small-blue-500 flex flex-col">
            <header
                className={cn("dark fixed top-0 z-50 flex h-16 w-screen shrink-0 justify-between border-b  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl")}>
                <div className={'w-full flex justify-center items-center'}>
                    <NavMenu/>
                </div>
            </header>
                <BlogPost postData={postData} isLoading={isLoading}/>
            <footer className={''}>
                <Footer/>
            </footer>
        </main>
    )
}