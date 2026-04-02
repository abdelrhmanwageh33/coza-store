
import MainSlider from "./_components/ui/MainSlider/MainSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./_components/ui/CategoryCard";
import { getloggedUserCart } from "./lib/services/cartService";
import { getAllProduct } from "./lib/services/productServises";
import {  IProduct } from "./lib/type/product.type";
import ProductCard from "./(mainRoute)/products/_components/ProductCard";
import { getAllBrand } from "./lib/services/brandService";
import Brand from "./_components/ui/Brand";
import Footer from "./_components/Shared/Footer";



export default async function page() {
     
      const AllProduct= await getAllProduct()



  return (
   <>
   <MainSlider/>
   <CategoryCard />
 <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 m-10 mx-auto w-[90%]">
        {AllProduct?.slice(0,12)?.map((p:IProduct)=> <ProductCard key={p._id} product={p}/> )}
    </section>
<section className="w-[90%] mx-auto my-8 md:my-12 py-6 md:py-10 overflow-hidden">

  <h3 className="
  text-center
  font-bold
  capitalize
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  mb-6 md:mb-10">

    our brand

  </h3>

  <Brand />

</section>

    
  
   </>
  );
}
