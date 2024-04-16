import AuthorBlogPage from "@/components/author/author-blog-page";
import {cn} from "@/lib/utils";
import {getPosts} from "@/data/blog";

export default async function Dashboard() {
    const posts = await getPosts()

    return (
        <main className=" ">
            <div className={cn("")}>
            <AuthorBlogPage posts={posts} />
            </div>
        </main>
    );
}
