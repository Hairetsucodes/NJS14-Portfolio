import Register from '@/components/authentication/Register'
import {cn} from '@/lib/utils'
import {NavMenu} from "@/components/navigation/nav-menu";
export default function Page() {
    return (
        <main className="">
            <div className={cn('')}>
                <Register/>
            </div>
        </main>
    );
}