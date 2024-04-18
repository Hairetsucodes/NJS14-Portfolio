
import { cn } from "@/lib/utils";
import BlogPost from '@/components/blog/blog-post'
import { getPost } from "@/data/blog";

export default async function Page({ params: { postSlug: postSlug } }: { params: { postSlug: string } }) {
    const data = await getPost(postSlug);
    return (
        <main
            className="">
            <div className={cn("")}>
                <BlogPost postData={data} />
            </div>
        </main>
    )
}