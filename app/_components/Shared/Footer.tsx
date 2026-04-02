import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-gray-300 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ================= CATEGORIES ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            CATEGORIES
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/category/women" className="hover:text-white transition">
                Women
              </Link>
            </li>
            <li>
              <Link href="/category/men" className="hover:text-white transition">
                Men
              </Link>
            </li>
            <li>
              <Link href="/category/shoes" className="hover:text-white transition">
                Shoes
              </Link>
            </li>
            <li>
              <Link href="/category/watches" className="hover:text-white transition">
                Watches
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= HELP ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            HELP
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/help/track-order" className="hover:text-white transition">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/help/returns" className="hover:text-white transition">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/help/shipping" className="hover:text-white transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/help/faqs" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= GET IN TOUCH ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            GET IN TOUCH
          </h3>
          <p className="text-sm leading-6 mb-6">
            Any questions? Let us know in store at 8th floor,
            379 Hudson St, New York, NY 10018 or call us on
            (+1) 96 716 6879
          </p>

          <div className="flex gap-4 text-xl">
            <Link href="#" className="hover:text-white transition">ⓕ</Link>
            <Link href="#" className="hover:text-white transition">ⓘ</Link>
            <Link href="#" className="hover:text-white transition">ⓟ</Link>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            NEWSLETTER
          </h3>

          <input
            type="email"
            placeholder="email@example.com"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white pb-2 mb-6"
          />

          <button className="bg-[#717FE0] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            SUBSCRIBE
          </button>
        </div>

      </div>
    </footer>
  );
}
