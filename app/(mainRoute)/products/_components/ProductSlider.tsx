'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IProduct } from "@/app/lib/type/product.type";

export default function ProductSlider({ product }: { product: IProduct }) {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true
  };

  return (
    <Slider {...settings}>
      {product?.images?.map((img, index) => (
        <div key={index} className="
          border border-zinc-200
          flex items-center justify-center
          h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]
        ">
          <img src={img} alt={product?.title} className="w-full h-full" />
        </div>
      ))}
    </Slider>
  );
}