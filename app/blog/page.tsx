import {NavMenu} from "@/components/navigation/nav-menu";
import BlogPage from "@/components/blog/blog-page";
import {Footer} from "@/components/Footer";
import {cn} from "@/lib/utils";

export default function Page() {
    return (
        <main
            className="">
            <div className={cn("")}>
                <BlogPage/>
            </div>
        </main>
    );
}
