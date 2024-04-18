
import { SitesSection } from "@/components/frontpage/sites-section";
import { HeroSection } from "@/components/frontpage/hero-section";

export default function Home() {
    return (
        <main>
            <div className={'pt-12'}>
                <HeroSection />
                <SitesSection />
            </div>
        </main>
    );
}
