import BlogEditor from "@/components/author/blog-editor/blog-editor";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session: string | any = await auth()
    if (session?.user?.role !== "AUTHOR" && session?.user?.role !== "ADMIN")  {
        // Redirect to login page
        redirect("/");
}


    return (
        <main className="">
            <div className={cn("pt-16")}>
                <BlogEditor />
            </div>
        </main>
    );
}
