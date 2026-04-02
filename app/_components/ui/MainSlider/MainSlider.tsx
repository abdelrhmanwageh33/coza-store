'use client';
import 'animate.css';
import "./MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from 'react';

export default function MainSlider() {

  const container = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    accessibility: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index: number) => setActive(index),
  };

  return (
    <div className="w-full overflow-hidden  " ref={container}>

      <Slider {...settings}>

        {/* Slide 1 */}
        <div className="first slide">

          <div className="container mx-auto 
          min-h-[60vh] 
          md:min-h-[75vh] 
          lg:min-h-[90vh] 
          flex items-center px-6">

            <div className="space-y-4 md:space-y-6">

              <p className="
              text-gray-600
              text-sm
              sm:text-lg
              md:text-xl
              lg:text-2xl">

                Men New-Season

              </p>

              <h2 className="
              font-bold
              text-gray-800
              tracking-wide
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-[70px]">

                JACKETS & COATS

              </h2>

              <button className="
              bg-[#717FE0]
              text-white
              px-6 py-2
              md:px-8 md:py-3
              rounded-full
              text-sm
              md:text-base
              font-semibold
              hover:bg-[#5f6cd6]
              transition">

                SHOP NOW

              </button>

            </div>

          </div>

        </div>


        {/* Slide 2 */}
        <div className="second slide">

          <div className="container mx-auto 
          min-h-[60vh] 
          md:min-h-[75vh] 
          lg:min-h-[90vh] 
          flex items-center px-6">

            <div className="space-y-4 md:space-y-6">

              <p className="
              text-gray-600
              text-sm
              sm:text-lg
              md:text-xl
              lg:text-2xl">

                Women New-Season

              </p>

              <h2 className="
              font-bold
              text-gray-800
              tracking-wide
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-[70px]">

                JACKETS & COATS

              </h2>

              <button className="
              bg-[#717FE0]
              text-white
              px-6 py-2
              md:px-8 md:py-3
              rounded-full
              text-sm
              md:text-base
              font-semibold
              hover:bg-[#5f6cd6]
              transition">

                SHOP NOW

              </button>

            </div>

          </div>

        </div>

      </Slider>

    </div>
  );
}