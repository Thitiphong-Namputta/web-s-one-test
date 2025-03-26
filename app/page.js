import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import BannerEvent from "@/components/BannerEvent";

export default function Home() {
  return (
    <div className="w-[1200]">
      <Header />
      <div className="my-3">
        <Banner />
      </div>
      <div className="my-3">
        <Category />
      </div>
      <div className="my-3">
        <BannerEvent />
      </div>
    </div>
  );
}
