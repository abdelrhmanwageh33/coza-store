import Image from "next/image";
import Link from "next/link";

export default function CategoryCard() {
  return (
    <div className="py-6 my-10 mx-auto w-[90%]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Women */}
        <Link href={`/category/women's-fashion`}>
          <div className="border border-zinc-300 rounded-lg flex items-center justify-between relative group overflow-hidden">

            <div className="relative z-20 ms-6 md:ms-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black group-hover:text-white transition">
                WOMEN
              </h3>

              <h4 className="text-lg sm:text-xl md:text-2xl text-black group-hover:text-white transition">
                2025
              </h4>
            </div>

            <div className="relative z-0 me-4 md:me-10 transition-all duration-700">
              <Image
                src="/assets/banner-01.webp"
                alt="women banner"
                width={400}
                height={400}
                className="h-[180px] sm:h-[220px] md:h-[250px] w-auto object-contain group-hover:scale-75 transition duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-[#0e11d2] opacity-0 group-hover:opacity-65 transition-all duration-700 z-10">
              <p className="absolute bottom-0 start-6 opacity-0 group-hover:bottom-8 group-hover:opacity-100 transition-all duration-500 text-white text-sm md:text-lg">
                shop now
              </p>
            </div>

          </div>
        </Link>

        {/* Men */}
        <Link href={`/category/men's-fashion`}>
          <div className="border border-zinc-300 rounded-lg flex items-center justify-between relative group overflow-hidden">

            <div className="relative z-20 ms-6 md:ms-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black group-hover:text-white transition">
                MEN
              </h3>

              <h4 className="text-lg sm:text-xl md:text-2xl text-black group-hover:text-white transition">
                2025
              </h4>
            </div>

            <div className="relative z-0 me-4 md:me-10 transition-all duration-700">
              <Image
                src="/assets/banner-02.webp"
                alt="men banner"
                width={400}
                height={400}
                className="h-[180px] sm:h-[220px] md:h-[250px] w-auto object-contain group-hover:scale-75 transition duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-[#0e11d2] opacity-0 group-hover:opacity-65 transition-all duration-700 z-10">
              <p className="absolute bottom-0 start-6 opacity-0 group-hover:bottom-8 group-hover:opacity-100 transition-all duration-500 text-white text-sm md:text-lg">
                shop now
              </p>
            </div>

          </div>
        </Link>

        {/* Electronics */}
        <Link href={`/category/electronics`}>
          <div className="border border-zinc-300 rounded-lg flex items-center justify-between relative group overflow-hidden">

            <div className="relative z-20 ms-6 md:ms-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black group-hover:text-white transition">
                ELECTRONICS
              </h3>

              <h4 className="text-lg sm:text-xl md:text-2xl text-black group-hover:text-white transition">
                2025
              </h4>
            </div>

            <div className="relative z-0 me-4 md:me-10 transition-all duration-700">
              <Image
                src="/assets/banner-03.webp"
                alt="electronics banner"
                width={400}
                height={400}
                className="h-[180px] sm:h-[220px] md:h-[250px] w-auto object-contain group-hover:scale-75 transition duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-[#0e11d2] opacity-0 group-hover:opacity-65 transition-all duration-700 z-10">
              <p className="absolute bottom-0 start-6 opacity-0 group-hover:bottom-8 group-hover:opacity-100 transition-all duration-500 text-white text-sm md:text-lg">
                shop now
              </p>
            </div>

          </div>
        </Link>

      </div>

    </div>
  );
}