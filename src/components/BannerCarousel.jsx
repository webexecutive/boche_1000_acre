import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banners from "../data/bannerData";

function BannerCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      onClickItem={(index) => {
        window.location.href = banners[index].link;
      }}
      className="cursor-pointer"
    >
      {banners.map((b) => (
        <div key={b.id}>
          <picture>
            <source media="(max-width: 768px)" srcSet={b.mobile} />
            <source media="(min-width: 769px)" srcSet={b.desktop} />
            <img src={b.desktop} alt={b.alt} />
          </picture>
        </div>
      ))}
    </Carousel>
  );
}

export default BannerCarousel;