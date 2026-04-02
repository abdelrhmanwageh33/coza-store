
import { getAllProduct } from "@/app/lib/services/productServises";
import { IProduct } from "@/app/lib/type/product.type";
import ProductCard from "../../products/_components/ProductCard";
import { log } from "node:console";
interface PageProps {
  params: {
    cat?: string;
  };
}

export default async function page({ params }: PageProps) {
    const param = await params;
const slug=param.cat
  
  
  // const decodedSlug = decodeURIComponent(slug!); // لفك الترميز
  // console.log("Decoded slug:", decodedSlug);

  const AllProduct = await getAllProduct();

  return (
    <section className="py-5 my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-5 gap-5">
    {AllProduct?.filter((realted:IProduct)=>realted?.category?.slug==slug)
            ?.map((p:IProduct)=> <ProductCard key={p._id} product={p}/> )}
    </section>
  );
}