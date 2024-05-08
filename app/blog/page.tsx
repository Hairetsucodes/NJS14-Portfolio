import BlogPage from "@/components/blog/blog-page";
import { cn } from "@/lib/utils";
import { getPosts } from "@/data/blog";

export const dynamic = 'force-dynamic'

export default async function Page() {
    const posts = await getPosts()
    if (posts == null) {
        return null
    }
    return (
        <main className="">
            <div className={cn("")}>
                <BlogPage posts={posts.reverse()} />
            </div>
        </main>
    );
}
