export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 border border-gray-200">

        <div className="grid md:grid-cols-2">

          {/* Left Side - Form */}
          <div className="p-10 border-r border-gray-200">

            <h2 className="text-2xl font-medium text-gray-800 mb-8 text-center">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              {/* Email */}
              <div className="border border-gray-300 rounded-md px-4 py-3 flex items-center gap-3">
                <span className="text-gray-400 text-lg">✉</span>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full outline-none text-gray-600"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="How Can We Help?"
                className="w-full border border-gray-300 rounded-md p-4 h-40 outline-none resize-none text-gray-600"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition font-semibold"
              >
                SUBMIT
              </button>

            </form>

          </div>


          {/* Right Side - Contact Info */}
          <div className="p-10 space-y-10">

            {/* Address */}
            <div className="flex gap-4">
              <span className="text-xl text-gray-500">📍</span>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Address
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Coza Store Center 8th floor, 379 Hudson St,
                  New York, NY 10018 US
                </p>
              </div>
            </div>


            {/* Phone */}
            <div className="flex gap-4">
              <span className="text-xl text-gray-500">📞</span>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Lets Talk
                </h3>

                <p className="text-blue-500 text-sm">
                  +1 800 1236879
                </p>
              </div>
            </div>


            {/* Email */}
            <div className="flex gap-4">
              <span className="text-xl text-gray-500">✉</span>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Sale Support
                </h3>

                <p className="text-blue-500 text-sm">
                  contact@example.com
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}