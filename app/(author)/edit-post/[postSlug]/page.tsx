import {AuthorNavMenu} from "@/components/author/nav-menu";
import PostEditor from "@/components/author/blog-editor/post-editor";
import {signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Footer} from "@/components/Footer";

export default async function Page() {
    const SignOut = async () => {
        return (
            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <Button className={'border-0'} variant={'outline'}>
                    Sign Out
                </Button>
            </form>
        )
    }
    return (
        <main className="">
            <div className={cn("")}>
                <PostEditor />
            </div>
        </main>
    );
}
