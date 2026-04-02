"use client";

export default function OrdersCard({ orders }: any) {
  return (
    <div className="p-6 grid gap-6">
      {orders.map((order: any) => (
        <div
          key={order._id}
          className="bg-white shadow-lg rounded-2xl p-5 border"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold">
                Order #{order.id}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-green-600">
                {order.totalOrderPrice} EGP
              </p>
              <p className="text-sm text-gray-500">
                {order.paymentMethodType}
              </p>
            </div>
          </div>

          {/* User */}
          <div className="mb-4 bg-gray-50 p-3 rounded-xl">
            <p className="font-medium">{order.user.name}</p>
          
          </div>

          {/* Items */}
          <div className="space-y-3">
            {order.cartItems.map((item: any) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-2"
              >
                <img
                  src={item.product.imageCover}
                  className="w-16 h-16 rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-medium">
                    {item.product.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Qty: {item.count}
                  </p>
                </div>

                <p className="font-semibold">
                  {item.price} EGP
                </p>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex justify-between mt-4 pt-3 border-t text-sm">
            <span
              className={`px-3 py-1 rounded-full ${
                order.isPaid
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {order.isPaid ? "Paid" : "Not Paid"}
            </span>

            <span
              className={`px-3 py-1 rounded-full ${
                order.isDelivered
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.isDelivered
                ? "Delivered"
                : "Not Delivered"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}