import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-black">
      <Head>
        <title>Pure Veg & Hotel</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo"
              className="rounded-full"
            />
            <h1 className="font-bold text-2xl text-black">MUKTAI KITCHEN</h1>
          </div>
          <div className="space-x-4">
            <button
              type="button"
              className="rounded-lg bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
            >
              TOKEN
            </button>
            <Link href="/user">
              <button
                type="button"
                className="rounded-lg bg-green-500 px-5 py-2 text-white hover:bg-green-600"
              >
                MESS
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-yellow-500 py-20 text-center">
        <h1 className="font-bold text-5xl text-black">Pure Veg Hotel</h1>
        <p className="mt-4 text-lg">
          Delicious, Healthy & Freshly Cooked Meals
        </p>
        <button
          type="button"
          className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-md hover:bg-gray-200"
        >
          Explore Menu
        </button>
      </header>

      {/* Special Dish Section */}
      <section className="mx-auto max-w-6xl py-16 text-center">
        <h2 className="font-bold text-3xl text-black">
          Special Dish - Mug Bhaji
        </h2>
        <div className="mt-6 flex justify-center">
          <Image
            src="/mugbahji.png"
            width={500}
            height={300}
            alt="Mug Bhaji"
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-4 text-lg">
          A crispy, spicy, and flavorful dish – A Must Try!
        </p>
      </section>

      {/* Menu Section */}
      <section className="mx-auto max-w-6xl py-16 text-center">
        <h2 className="font-bold text-3xl text-black">Our Delicious Menu</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Veg Thali",
              img: "/ved-thali.png",
              desc: "3 Chapati, Rice, Dal, 2 Sabzi, Papad, 2 Mug-bhaji",
            },
            {
              name: "Vadapav",
              img: "/vadapav.png",
              desc: "Delicious, Creamy & Spicy",
            },
            {
              name: "Poha",
              img: "/pohe.png",
              desc: "Light & Healthy Breakfast",
            },
          ].map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={item.img}
                width={350}
                height={250}
                alt={item.name}
                className="rounded-md"
              />
              <h3 className="mt-2 font-semibold text-xl">{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-200 py-16 text-center">
        <h2 className="font-bold text-3xl">Why Choose Us?</h2>
        <p className="mt-4 text-lg">
          🌿 100% Pure Veg | 🍽️ Tasty & Fresh | 🚀 Fast Service | 💰 Affordable
          Pricing
        </p>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl py-16 text-center">
        <h2 className="font-bold text-3xl">What Our Customers Say</h2>
        <p className="mt-4 text-lg">
          "The best pure veg food I have ever tasted! Feels like home!"
        </p>
        <p className="mt-2">- Happy Customer</p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-6xl py-16 text-center">
        <h2 className="font-bold text-3xl">Contact Us</h2>
        <form className="mx-auto mt-6 max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded border p-2 text-black focus:ring focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded border p-2 text-black focus:ring focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full rounded border p-2 text-black focus:ring focus:ring-yellow-400"
          />
          <button
            type="button"
            className="rounded bg-yellow-600 px-6 py-3 text-white hover:bg-yellow-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2025 Shuddh Shakahari. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
