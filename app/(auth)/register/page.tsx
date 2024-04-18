import Register from '@/components/authentication/Register'
import { cn } from '@/lib/utils'
export default function Page() {
    return (
        <main className="">
            <div className={cn('')}>
                <Register />
            </div>
        </main>
    );
}