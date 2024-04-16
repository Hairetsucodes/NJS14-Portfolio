
import {SitesSection} from "@/components/frontpage/sites-section";
import {HeroSection} from "@/components/frontpage/hero-section";

export default function Home() {
    return (
        <main>
            <div className={''}>
                <HeroSection/>
                <SitesSection/>
            </div>
        </main>
    );
}
