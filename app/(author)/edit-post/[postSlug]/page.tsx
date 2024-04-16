import PostEditor from "@/components/author/blog-editor/post-editor";
import {cn} from "@/lib/utils";
import {getPost} from "@/data/blog";

export default async function Page({params: {postSlug: postSlug}}: {params: {postSlug: string}}) {
    const postData = await getPost(postSlug)
    return (
        <main className="">
            <div className={cn("")}>
                <PostEditor postData={postData} />
            </div>
        </main>
    );
}
