import PostEditor from "@/components/author/blog-editor/post-editor";
import { cn } from "@/lib/utils";
import { getPost } from "@/data/blog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page({ params: { postSlug: postSlug } }: { params: { postSlug: string } }) {
    const session: string | any = await auth()
    if (session?.user?.role !== "AUTHOR" && session?.user?.role !== "ADMIN")  {
        // Redirect to login page
        redirect("/");
}
    const postData = await getPost(postSlug)
    return (
        <main className="">
            <div className={cn("")}>
                <PostEditor postData={postData} />
            </div>
        </main>
    );
}
