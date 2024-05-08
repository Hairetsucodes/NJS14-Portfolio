import AuthorBlogPage from "@/components/author/author-blog-page";
import { cn } from "@/lib/utils";
import { getPosts } from "@/data/blog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Dashboard() {
    const session: string | any = await auth()
    console.log(session)
    if (session?.user?.role !== "AUTHOR" && session?.user?.role !== "ADMIN") {
        redirect("/");
    }
    const posts = await getPosts()
 

    return (
        <main className=" ">
            <div className={cn("")}>
                <AuthorBlogPage posts={posts.reverse()} />
            </div>
        </main>
    );
}
