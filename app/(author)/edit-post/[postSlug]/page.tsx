import {AuthorNavMenu} from "@/components/author/nav-menu";
import PostEditor from "@/components/author/blog-editor/post-editor";
import {signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Footer} from "@/components/about-page/Footer";

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
        <main className="h-full w-full bg-black dark:bg-grid-small-blue-500 bg-grid-small-blue-500 ">
                <header className={cn("dark fixed top-0 z-50 flex h-16 w-screen shrink-0 justify-between border-b  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl")}>
                    <div className={'w-full flex justify-center items-center'}>
                        <AuthorNavMenu>
                            <SignOut/>
                        </AuthorNavMenu>
                    </div>
                </header>
            <div className={cn("pt-16")}>
                <PostEditor />
            </div>
            <Footer/>
        </main>
    );
}
