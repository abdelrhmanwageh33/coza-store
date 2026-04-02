'use client'
import { useEffect, useState } from "react";
import { getAllProduct } from "@/app/lib/services/productServises";
import { IProduct } from "@/app/lib/type/product.type";
import ProductCard from "@/app/(mainRoute)/products/_components/ProductCard";
import ProductFilter from './ProductFilter';

export default function ProductGrid() {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  // جلب المنتجات من API مرة واحدة
  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProduct();
      console.log(products);
      
      setAllProducts(products);
      setFilteredProducts(products); // عرض كل المنتجات أول مرة
    }
    fetchProducts();
  }, []);

  // دالة الفلترة حسب category name
  const filterCategory = (categoryName: string) => {
    if (categoryName === 'All Products') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (p) => p.category.name === categoryName
      );
      setFilteredProducts(filtered);
    }
  }

  return (
    <section className="py-8 my-8">
      {/* الفلتر */}
      <ProductFilter onSelectCategory={filterCategory} />



      {/* المنتجات */}
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
        {filteredProducts.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
}



// [User clicks a category button]
//               │
//               ▼
//      ProductFilter.handleClick(cat)
//       ┌─────────────┐
//       │ setActive() │ ──► يغير حالة الزر ليوضح الـ active
//       └─────────────┘
//               │
//               ▼
//       onSelectCategory(cat)
//       ┌─────────────┐
//       │  ProductGrid │ ◄── receives categoryName
//       └─────────────┘
//               │
//               ▼
//       filterCategory(categoryName)
//       ┌─────────────┐
//       │ setFilteredProducts(filteredProducts)
//       └─────────────┘
//               │
//               ▼
//       واجهة المستخدم تتحدث
//       (يتم عرض المنتجات المفلترة)