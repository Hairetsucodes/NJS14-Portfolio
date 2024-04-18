import SignIn from "@/components/authentication/SignIn";
import { cn } from "@/lib/utils";


export default function Page() {
    return (
        <main className="">
            <div className={cn('')}>
                <SignIn />
            </div>
        </main>
    );
}