import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen·bg-yellow-50·text-black">
      <Head>
        <title>Pure Veg & Hotel</title>
      </Head>

      <nav className="bg-white·p-4·shadow-md">
        <div className="mx-auto·flex·max-w-6xl·items-center·justify-between">
          <h1 className="font-bold·text-2xl·text-black">MUKTAI KITCHEN </h1>
          <button
            type="button"
            className="rounded-lg·bg-yellow-500·px-5·py-2·text-white"
          >
            TOKEN
          </button>
        </div>
      </nav>

      <header className="bg-yellow-500·py-20·text-center">
        <h1 className="font-bold·text-5xl·text-black">Pure Veg Hotel & </h1>
        <p className="mt-4·text-black·text-lg">
          Delicious, Healthy & Freshly Cooked Meals
        </p>
        <button
          type="button"
          className="mt-6·rounded-lg·bg-white·px-6·py-3·font-semibold·text-black"
        >
          Explore Menu
        </button>
      </header>

      <section className="mx-auto·max-w-6xl·py-16·text-center">
        <h2 className="font-bold·text-3xl·text-black">
          Special Dish - Mug Bhaji
        </h2>
        <div className="mt-6·flex·justify-center">
          <Image
            src="/mugbahji.png"
            width={500}
            height={300}
            alt="Mug Bhaji"
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-4·text-black·text-lg">
          A crispy, spicy, and flavorful dish – A Must Try!
        </p>
      </section>

      <section className="mx-auto·max-w-6xl·py-16·text-center">
        <h2 className="font-bold·text-3xl·text-black">Our Delicious Menu</h2>
        <div className="mt-8·grid·grid-cols-1·gap-8·md:grid-cols-3">
          <div className="rounded-lg·bg-white·p-6·shadow-lg">
            <Image
              src="/ved-thali.png"
              width={300}
              height={200}
              alt="Veg Thali"
              className="rounded-md"
            />
            <h3 className="mt-2·font-semibold·text-black·text-xl">Veg Thali</h3>
            <p className="text-black">
              {" "}
              3 Chapati, Rice, Dal, 2 Sabzi,Papad,2 Mug-bhaji
            </p>
          </div>
          <div className="rounded-lg·bg-white·p-6·shadow-lg">
            <Image
              src="/vadapav.png"
              width={300}
              height={200}
              alt="vadapav"
              className="rounded-md"
            />
            <h3 className="mt-2·font-semibold·text-black·text-xl">
              Paneer Butter Masala
            </h3>
            <p className="text-black">Delicious, Creamy & Spicy</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src="/pohe.png"
              width={300}
              height={200}
              alt="Poha"
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-black mt-2">Poha</h3>
            <p className="text-black">Light & Healthy Breakfast</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16 text-center">
        <h2 className="text-3xl font-bold text-black">Why Choose Our ?</h2>
        <p className="mt-4 text-lg text-black">
          🌿 100% Pure Veg | 🍽️ Tasty & Fresh | 🚀 Fast Service | 💰 Affordable
          Pricing
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold text-black">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-black">
          "The best pure veg food I have ever tasted! Feels like home!"
        </p>
        <p className="text-black mt-2">- Happy Customer</p>
      </section>

      <section className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold text-black">Contact Us</h2>
        <form className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded mt-4 text-black"
          />
          <textarea
            placeholder="Your Mesaage"
            className="w-full p-2 border rounded mt-4 text-black"
          />
          <button
            type="button"
            className="bg-yellow-600 text-white px-6 py-3 mt-4 rounded"
          >
            Send Mesaage
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Shuddh Shakahari . All Rights Reserved.</p>
      </footer>
    </div>
  );
}
