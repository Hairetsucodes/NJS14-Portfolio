import {NavMenu} from "@/components/navigation/nav-menu";
import BlogPage from "@/components/blog/blog-page";
import {Footer} from "@/components/about-page/Footer";
import {cn} from "@/lib/utils";

export default function Page() {
    return (
        <main
            className="min-h-screen h-full w-full bg-black dark:bg-grid-small-blue-500 bg-grid-small-blue-500 flex flex-col">

            <header
                className={cn("dark fixed top-0 z-50 flex h-16 w-screen shrink-0 justify-between border-b  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl")}>
                <div className={'w-full flex justify-center items-center'}>
                    <NavMenu/>
                </div>
            </header>
            <div className={cn("pt-16 flex-grow")}>
                <BlogPage/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </main>
    );
}
