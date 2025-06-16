import Banner from "@/components/banner/banner.component";
import Carousel from "@/components/carousel/carousel.component";
import Hero from "@/components/hero/hero.component";
import WomanBackground from "@/components/woman-background/woman-background.component";

export default function Home() {
  return (
    <div className='screen-size'>
      <main>
        <div>
          <Hero />
          <Banner />
          <WomanBackground />
          <Carousel />
        </div>
      </main>
    </div>
  );
}
