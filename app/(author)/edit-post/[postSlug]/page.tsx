import PostEditor from "@/components/author/blog-editor/post-editor";
import {cn} from "@/lib/utils";

export default async function Page() {
    return (
        <main className="">
            <div className={cn("")}>
                <PostEditor />
            </div>
        </main>
    );
}
