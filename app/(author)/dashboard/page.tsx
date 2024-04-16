import AuthorBlogPage from "@/components/author/author-blog-page";
import {cn} from "@/lib/utils";

export default async function Dashboard() {

    return (
        <main className=" ">
            <div className={cn("")}>
            <AuthorBlogPage/>
            </div>
        </main>
    );
}
