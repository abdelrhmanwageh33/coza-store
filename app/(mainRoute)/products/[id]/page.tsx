import { getAllProduct, productDetails } from "@/app/lib/services/productServises";
import { IProduct } from "@/app/lib/type/product.type";
import ProductCard from "../_components/ProductCard";
import { addToCart } from "@/app/lib/services/cartService";
import { useCart } from "@/app/lib/context/CartContext";
import ProductDetails from "../_components/ProductDetails";
import Header from "@/app/_components/Shared/Header/Header";

export default async function page({params}:{params:{id:string}}) {
  // take id from url 
    const {id}= await params
    console.log(id);
    // fetch all product to make related product 
  const AllProduct=await getAllProduct()
  // fetch product detalis and made id params 
    const product:IProduct= await productDetails(id)
    

 
    
  return (
    <section className="w-[90%] mx-auto">
      <Header header="Product Details"/>
   <ProductDetails product={product}/>
            <h3 className="text-center py-5 my-10 text-2xl capitalize">related products</h3>

    <section className="py-5 my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-5">
            {AllProduct?.filter((realted:IProduct)=>realted?.category?.name==product?.category?.name)
            ?.map((p:IProduct)=> <ProductCard key={p._id} product={p}/> )}
    
    
    
        </section>
    </section>
  )
}
