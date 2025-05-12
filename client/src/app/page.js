import Banner from "@/components/banner/banner.component";
import Hero from "@/components/hero/hero.component";
import WomanBackground from "@/components/woman-background/woman-background.component";

export default function Home() {
  return (
    <div className="h-[300dvh] w-screen">
      <main>
        <div>
          <Hero />
          <Banner />
          <WomanBackground />
        </div>
      </main>
    </div>
  );
}
