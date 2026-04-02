import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 my-15 z-50">
      <div className="text-center max-w-xl w-full">

        <h1 className="text-8xl font-bold text-gray-200">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>

        <div className="flex items-center mt-6 gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-black"
          />
          <button className="px-6 py-3 bg-black text-white rounded-full">
            Search
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="/"
            className="px-5 py-3 bg-black text-white rounded-full"
          >
            Back to Home
          </Link>

          <button
            className="px-5 py-3 border border-gray-300 rounded-full"
          >
            Go Back
          </button>
        </div>

        <p className="text-gray-400 mt-10 text-sm">
          Or explore these popular sections:
        </p>

        <div className="flex justify-center gap-6 mt-2 text-gray-600 text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/cart">Cart</Link>
        </div>

      </div>
    </div>
  );
}