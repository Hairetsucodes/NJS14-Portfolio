import SignIn from "@/components/authentication/SignIn";
import {cn} from "@/lib/utils";
import {NavMenu} from "@/components/navigation/nav-menu";


export default function Page() {
    return (
        <main className="">
            <div className={cn('')}>
                <SignIn/>
            </div>
        </main>
    );
}