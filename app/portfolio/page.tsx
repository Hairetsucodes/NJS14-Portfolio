
import { SitesSection } from "@/components/frontpage/sites-section";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <main
            className="">
            <div className={cn("")}>
                <div className={'p-2'}>
                    <p className={'text-center font-semibold text-xl mx-10'}>
                        My Portfolio
                    </p>
                </div>
                <SitesSection />
            </div>
        </main>
    );
}
