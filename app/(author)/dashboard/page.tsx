import AuthorBlogPage from "@/components/author/author-blog-page";
import { cn } from "@/lib/utils";
import { getPosts } from "@/data/blog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Dashboard() {
    const session: string | any = await auth()
    if (session?.user?.role !== "AUTHOR" || "ADMIN") {
            // Redirect to login page
            redirect("/");
    }
    const posts = await getPosts()

    return (
        <main className=" ">
            <div className={cn("")}>
                <AuthorBlogPage posts={posts} />
            </div>
        </main>
    );
}
