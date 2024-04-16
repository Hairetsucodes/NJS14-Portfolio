'use client'
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {NavMenu} from "@/components/navigation/nav-menu";
import {Footer} from "@/components/Footer";
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
        <main
            className="">
            <div className={cn("")}>
                <BlogPost postData={postData} isLoading={isLoading}/>
            </div>
        </main>
    )
}