import PostEditor from "@/components/author/blog-editor/post-editor";
import { cn } from "@/lib/utils";
import { getPost } from "@/data/blog";

export default async function Page({ params: { postSlug: postSlug } }: { params: { postSlug: string } }) {
    console.log(postSlug)
    const postData = await getPost(postSlug)
    console.log(postData)
    return (
        <main className="">
            <div className={cn("")}>
                <PostEditor postData={postData} />
            </div>
        </main>
    );
}
