import { useCart } from "@/app/lib/context/CartContext";
import { Product } from "@/app/lib/type/product.type";
import { toast } from "sonner";
import { removeCartItem, updateCartItem } from "@/app/lib/services/cartService";

export default function CartGrid({ products }: { products: Product }) {
  const { getCartData } = useCart();

  async function removeIem() {
    await removeCartItem(products?.product?._id);
    getCartData();
  }

  async function minus() {
    const currentCount = products?.count || 1;
    await toast.promise(updateCartItem(products?.product?._id, currentCount - 1), {
      loading: 'Updating quantity...',
      success: 'Updated successfully',
      error: 'Failed',
    });
    getCartData();
  }

  async function plus() {
    const currentCount = products?.count || 1;
    await toast.promise(updateCartItem(products?.product?._id, currentCount + 1), {
      loading: 'Updating quantity...',
      success: 'Updated successfully',
      error: 'Failed',
    });
    getCartData();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-xl p-4 sm:p-6 shadow">
            
            {/* Product Info */}
            <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
              <img
                src={products?.product?.imageCover}
                alt={products?.product?.title}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-sm sm:text-base">{products?.product?.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{products?.product?.category?.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{products?.product?.brand?.name}</p>
                <p className="font-semibold mt-1 sm:mt-2 text-sm sm:text-base">{products?.price} EGP</p>
              </div>
            </div>

            {/* Quantity & Remove */}
            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <div className="flex items-center border rounded-full px-3 py-1">
                <button className="px-2 text-lg cursor-pointer" onClick={minus}>−</button>
                <span className="px-3">{products?.count}</span>
                <button className="px-2 text-lg cursor-pointer" onClick={plus}>+</button>
              </div>
              <button className="text-red-500 cursor-pointer text-lg" onClick={removeIem}>🗑</button>
            </div>

          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          {/* ضع هنا ملخص الطلب */}
        </div>

      </div>
    </div>
  );
}