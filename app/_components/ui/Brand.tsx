"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { IBrand } from "@/app/lib/type/product.type";
import { getAllBrand } from "@/app/lib/services/brandService";

export default function Brand() {
  const [brands, setBrands] = useState<IBrand[]>([]);
async function fetchBrands() {
      try {
        const data = await getAllBrand();
        setBrands(data || []);
      } catch (err) {
        console.error(err);
      }
    }
  useEffect(() => {
    
    fetchBrands();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
        responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };



  return (
    <Slider {...settings}>
      {brands.map((b) => (
        <div key={b._id} className="p-2 overflow-hidden">
          <img src={b.image} alt={b.name} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
}
