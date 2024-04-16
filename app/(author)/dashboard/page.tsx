import {AuthorNavMenu} from "@/components/author/nav-menu";
import {signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import AuthorBlogPage from "@/components/author/author-blog-page";
import {cn} from "@/lib/utils";
import {Footer} from '@/components/Footer'

export default async function Dashboard() {

    return (
        <main className=" ">
            <div className={cn("")}>
            <AuthorBlogPage/>
            </div>
        </main>
    );
}
