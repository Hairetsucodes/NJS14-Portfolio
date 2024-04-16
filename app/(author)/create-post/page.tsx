import BlogEditor from "@/components/author/blog-editor/blog-editor";
import {cn} from "@/lib/utils";

export default async function Dashboard() {
    return (
        <main className="">
            <div className={cn("pt-16")}>
                <BlogEditor/>
            </div>
        </main>
    );
}
